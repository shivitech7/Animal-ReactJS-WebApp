// import logo from './logo.svg';
import { Home } from './Animals/Home.js';
import { Animal } from './Animals/Animal.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animal">Animal</Link>
            </li>
          </ul>
        </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact component={Animal} path="/animal" />
            {/* <Animal /> */}
            {/* </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:name">
              <p>Error 404</p>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
