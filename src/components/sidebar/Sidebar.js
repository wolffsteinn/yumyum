import React, { useContext, useState } from "react";

import {
  StyledLink,
  StyledLinkContainer,
  StyledLinkIcon,
  StyledLinkLabel,
  StyledPerson,
  StyledSidebar,
  StyledSideBarButton,
  StyledSidebarDivider,
  StyledTheme,
  StyledThemeLabel,
  StyledThemeToggler,
  StyledToggleThumb,
} from "./Sidebar-styles";
import { AiOutlineHome, AiOutlineSetting, AiOutlineLeft } from "react-icons/ai";
import { MdLogout, MdOutlineRateReview } from "react-icons/md";
import { BiMapAlt } from "react-icons/bi";
import { ThemeContext } from "../../App";
import { useAuth } from "../../Context/Context";
import PersonIcon from "@mui/icons-material/Person";

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { currentUser } = useAuth();

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
      <StyledPerson>
        <PersonIcon fontSize="large" />
        {sidebarOpen && (
          <>
            <StyledLinkLabel>Welcome, {currentUser.email}</StyledLinkLabel>
          </>
        )}
      </StyledPerson>

      <StyledSidebarDivider />
      {linksArray.map(({ icon, label, to }) => (
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
              </>
            )}
          </StyledLink>
        </StyledLinkContainer>
      ))}
      <StyledSidebarDivider />
      {linksSecondaryArray.map(({ icon, label, to }) => (
        <StyledLinkContainer key={label}>
          <StyledLink
            to={to}
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
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/dashboard",
    notif: 0,
  },
  {
    label: "All Posts",
    icon: <AiOutlineHome />,
    to: "/posts",
    notif: 0,
  },
  {
    label: "Map View",
    icon: <BiMapAlt />,
    to: "/mapView",
    notif: 1,
  },
  {
    label: "Post a Review!",
    icon: <MdOutlineRateReview />,
    to: "/postReview",
    notif: 0,
  },
];

const linksSecondaryArray = [
  {
    label: "Reset Password",
    icon: <AiOutlineSetting />,
    to: "/settings",
  },
  {
    label: "Logout",
    icon: <MdLogout />,
    to: "/logout",
  },
];

export default Sidebar;
