import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts';
import { SignUp, Login, Home, Admin } from './pages';

const App = () => {
  return (
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
  );
}

export default App;
