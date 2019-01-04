import styled, { createGlobalStyle, css } from 'styled-components';

export const theme1 = {
  primary: '#ff0198',
  dark: '#222',
  secondary: '#01c1d6',
  danger: '#eb238e',
  light: '#f4f4f4'
};

export const theme2 = {
  primary: '#6e27c5',
  secondary: '#ffb617',
  danger: '#f16623',
  light: '#f4f4f4',
  dark: '#222'
};

export const Button = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.primary};
      color: white;
    `};
`;

export const GlobalStyle = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto:400,900')
    body {
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif;
    }

    h1 {
        font-family: Monserrat; 
    }
`;
