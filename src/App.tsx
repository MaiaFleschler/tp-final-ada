import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts';
import { SignUp, Login, Home, Admin, Movies, Series } from './pages';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#85b7cc',
    },
    secondary: {
      main: '#E64398'
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
          <Route path='/movies' component={Movies} />
          <Route path='/series' component={Series} />
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
