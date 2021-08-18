import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import FriendsList from "./Components/FriendList";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>

          {localStorage.getItem("token") && (
            <li>
              <Link to="/friendsList"> Friends List </Link>{" "}
            </li>
          )}
        </ul>

        <Switch>
          <PrivateRoute exact path="/friendsList" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
