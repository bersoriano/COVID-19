import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';

let theme = createMuiTheme({
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Route exact path='/home' render={() => <Home />} />
        <Route exact path='/signUp' render={() => <SignUp />} />
        <Route exact path='/login' render={() => <Login />} />
        <Route exact path='/forgot' render={() => <ForgotPassword />} />
        <Redirect
          to={{
            pathname: '/home',
          }}
        />
      </main>
    </ThemeProvider>
  );
}

export default App;