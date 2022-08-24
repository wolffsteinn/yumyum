import styled from "styled-components";
import { view } from "../../global-sidebar-styles/variables";

export const StylesLayout = styled.div`
  display: flex;
`;

export const StylesMain = styled.main`
  padding: calc(${view.smSpacing} * 2);

  h1 {
    font-size: 14px;
  }
`;
