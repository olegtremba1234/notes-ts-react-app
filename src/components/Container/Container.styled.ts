import styled from "styled-components";

export const AppContainer = styled.div`
    // Mobile
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  // Tablet
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  // Desktop
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
  }
`