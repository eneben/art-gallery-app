import Navigation from "./Navigation";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000;
`;

const StyledMain = styled.main`
  background-color: #000;
  color: #fff;
  flex: 1;
  margin: 0 0 80px 0;
  padding: 0 30px;

  &::before {
    margin: 0;
    padding: 0;
  }

  &::after {
    margin: 0;
    padding: 0;
  }
`;

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <StyledMain>{children}</StyledMain>
      <Navigation />
    </LayoutWrapper>
  );
}
