import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts';
import { SignUp, Login, Home, Admin } from './pages';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#18B7BE',
      //main: '#18ACBA',
      //main: '#de6486',
    },
    secondary: {
      // main: '#ffffff',
      main: '#FCD752',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
