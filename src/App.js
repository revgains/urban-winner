import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { theme1, theme2, Button } from './theme/globalStyle';
import ThemeSelect from './components/ThemeSelect';

const AppWrapper = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 0.5s linear;
  }
`;
const AppHeader = styled.div`
  height: 150px;
  padding: 20px;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`;

const AppTitle = styled.h1`
  font-weight: 900;
`;

const AppIntro = styled.p`
  color: ${props => props.theme.dark};
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`;

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``;

const BigButt = styled(Button)`
  height: 3rem;
  font-size: 2rem;
  width: 40vw;
  border-radius: 30px;
`;

const Underline = styled.span`
  border-bottom: 4px solid ${props => props.theme.secondary};
`;

class App extends Component {
  state = {
    theme: theme1
  };
  handleThemeChange = e => {
    let theme = e.target.value;
    theme === 'theme1' ? (theme = theme1) : (theme = theme2);
    this.setState({ theme });
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <AppWrapper>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>Welcome to React</AppTitle>
          </AppHeader>
          <AppIntro>
            Bootstrapped with{' '}
            <Underline>
              <code>create-react-app</code>
            </Underline>
            .
          </AppIntro>
          <AppIntro>
            Components styled with{' '}
            <Underline>
              <code>styled-components</code>
            </Underline>{' '}
            <EmojiWrapper aria-labelledby="nail-polish">💅</EmojiWrapper>
          </AppIntro>
          <Button>Normal Button</Button>
          <Button primary>Primary Button</Button>
          <ThemeSelect handleThemeChange={this.handleThemeChange} />
          <BigButt>Extended Button</BigButt>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
