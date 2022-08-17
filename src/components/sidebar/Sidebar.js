import React, { useContext, useState, useRef } from "react";
import { logoSVG } from "../../icons";
import {
  StyledLink,
  StyledLinkContainer,
  StyledLinkIcon,
  StyledLinkLabel,
  StyledLinkNotif,
  StyledLogo,
  StyledSearch,
  StyledSearchIcon,
  StyledSidebar,
  StyledSideBarButton,
  StyledSidebarDivider,
  StyledTheme,
  StyledThemeLabel,
  StyledThemeToggler,
  StyledToggleThumb,
} from "./Sidebar-styles";
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineLeft,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { ThemeContext } from "../../App";

const Sidebar = () => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      //focus on input
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

  return (
    <StyledSidebar isOpen={sidebarOpen}>
      <>
        <StyledSideBarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((open) => !open)}
        >
          <AiOutlineLeft />
        </StyledSideBarButton>
      </>
      <StyledLogo>
        <img src={logoSVG} alt="logo" />
      </StyledLogo>
      <StyledSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
        <StyledSearchIcon>
          <AiOutlineSearch />
        </StyledSearchIcon>
      </StyledSearch>
      <StyledSidebarDivider />
      {linksArray.map(({ icon, label, notif, to }) => (
        <StyledLinkContainer key={label}>
          <StyledLink
            to={to}
            // when sidebar is not open, width: fit-content. else, the params that we set
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <StyledLinkIcon>{icon}</StyledLinkIcon>
            {sidebarOpen && (
              <>
                <StyledLinkLabel>{label}</StyledLinkLabel>
                {/* if notifications are at 0 or null, do not display */}
                {!!notif && <StyledLinkNotif>{notif}</StyledLinkNotif>}
              </>
            )}
          </StyledLink>
        </StyledLinkContainer>
      ))}
      <StyledSidebarDivider />
      {linksSecondaryArray.map(({ icon, label }) => (
        <StyledLinkContainer key={label}>
          <StyledLink
            to="/"
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <StyledLinkIcon>{icon}</StyledLinkIcon>
            {sidebarOpen && <StyledLinkLabel>{label}</StyledLinkLabel>}
          </StyledLink>
        </StyledLinkContainer>
      ))}
      <StyledSidebarDivider />
      <StyledTheme>
        {sidebarOpen && <StyledThemeLabel>Dark Mode</StyledThemeLabel>}
        <StyledThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <StyledToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </StyledThemeToggler>
      </StyledTheme>
    </StyledSidebar>
  );
};
const linksArray = [
  {
    label: "Explore",
    icon: <AiOutlineHome />,
    to: "/",
    notif: 0,
  },
  {
    label: "Posts",
    icon: <MdOutlineAnalytics />,
    to: "/posts",
    notif: 1,
  },
  {
    label: "Account",
    icon: <BsPeople />,
    to: "/account",
    notif: 5,
  },
];

const linksSecondaryArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
  },
  {
    label: "Logout",
    icon: <MdLogout />,
  },
];

export default Sidebar;
