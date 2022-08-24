import styled from "styled-components";
import { buttonReset, view } from "../../global-sidebar-styles/variables";
import { Link } from "react-router-dom";

export const StyledSidebar = styled.div`
  width: ${({ isOpen }) => (!isOpen ? "auto" : view.sidebarWidth)};
  background: ${({ theme }) => theme.background};
  height: 100vh;
  padding: ${view.lgSpacing};

  position: relative;
`;

export const StyledSideBarButton = styled.button`
  ${buttonReset}
  position: absolute;
  top: ${view.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? "-16px" : "-20px")};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 0 4px ${({ theme }) => theme.background3},
    0 0 7px ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const StyledPerson = styled.div`
  width: 100%;
  cursor: pointer;
  padding-left: ${view.smSpacing};
  margin-bottom: ${view.lgSpacing};
  display: flex;
`;

export const StyledSidebarDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.background3};
  margin: ${view.lgSpacing} 0;
`;

export const StyledLinkContainer = styled.div`
  background: ${({ theme, isActive }) =>
    !isActive ? "transparent" : theme.background3};
  border-radius: ${view.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.background3};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${view.smSpacing} - 2px) 0;
`;

export const StyledLinkIcon = styled.div`
  padding: ${view.smSpacing} ${view.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`;

export const StyledLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${view.smSpacing};
`;

export const StyledLinkNotif = styled.div`
  font-size: 14px;
  padding: calc(${view.smSpacing} / 2) ${view.smSpacing};
  border-radius: calc(${view.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;
  margin-right: ${view.mdSpacing};
`;

export const StyledTheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
export const StyledThemeLabel = styled.span`
  display: block;
  flex: 1;
`;
export const StyledThemeToggler = styled.button`
  ${buttonReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) =>
    !isActive ? theme.background3 : theme.primary};
  position: relative;
`;

export const StyledToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.5s;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.background};
`;
