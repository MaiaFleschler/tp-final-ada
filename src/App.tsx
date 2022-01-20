import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SignUp } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/signUp' component={SignUp} />
        <Route path='/' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
