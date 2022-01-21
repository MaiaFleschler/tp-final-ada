import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts';
import { SignUp, Login } from './pages';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/' component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
