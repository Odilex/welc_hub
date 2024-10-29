import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Navigation = styled.nav`
  background-color: #f0f0f0;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    &:hover {
      color: #0066cc;
    }
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navigation>
          <NavList>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/about">About</Link></NavItem>
          </NavList>
        </Navigation>
        <Outlet />
      </AppContainer>
    </>
  );
}

export default App;