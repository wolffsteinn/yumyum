import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles.js";
import "./otherStyles.css";
import hawkerData from "../../hawker-centres-kml.json";
import compass from "./compass.svg";

import { NavLink } from "react-router-dom";

let hawkerStringNoSpace;
let hawkerStringNoSpace2;

const heart =
  "https://www.freeiconspng.com/thumbs/heart-icon/heart-icon-14.png";

const libraries = ["places"];
const mapContainerStyle = {
  width: "80vw",
  height: "80vh",
};
const center = {
  lat: 1.3368848,
  lng: 103.8146355,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [selected, setSelected] = React.useState(null);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (selected != null) {
    // const hawkerString = JSON.stringify(selected.ADDRESSPOSTALCODE);
    // hawkerStringNoSpace = hawkerString.replace(/\s+"/g, "");
    // hawkerStringNoSpace2 = hawkerStringNoSpace.replaceAll('^"|"$', "");
    // console.log(hawkerString);
  }

  if (loadError) return "Error loading map";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <Search panTo={panTo} />
      <Locate panTo={panTo} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {hawkerData.map((item) => {
          return (
            <Marker
              key={item.Name}
              position={{
                lat: item.Y,
                lng: item.X,
              }}
              icon={{
                url: heart,
                scaledSize: new window.google.maps.Size(30, 30),
              }}
              onClick={() => {
                setSelected(item);
                console.log(setSelected);
                console.log(selected);
                console.log(item);
              }}
            />
          );
        })}

        {selected ? (
          <InfoWindow
            onCloseClick={() => {
              setSelected(null);
            }}
            position={{
              lat: selected.Y,
              lng: selected.X,
            }}
          >
            <div>
              <h2>{selected.Name}</h2>
              <NavLink to={`/posts/${selected.ADDRESSPOSTALCODE}`} exact>
                View Reviews
              </NavLink>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src={compass} alt="compass-locate me" />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 1.287953, lng: () => 103.851784 },
      radius: 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
