// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import fire from "./fire.js";
import ListAllPosts from "./components/blogPost/ListAllPosts"

// loggin authentication with fire & state
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  console.log("logged in?", isLoggedIn);
  // signout
  const signOut = () => {
    fire.auth().signOut()
};

  return (
    <div className="App">
      <Router>
        {!isLoggedIn ? (
          <>
            <Switch>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </>
        ) : (
          <span onClick={signOut}>
            <a href="#">Sign out</a>
          </span>
          <Switch>
            <Route path="/">
              <ListAllPosts/>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}
export default App;
