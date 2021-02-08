// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import fire from "./fire.js";
import Login from './components/session/Login';
import ListAllPosts from "./components/blogPost/ListAllPosts";
import AddPost from "./components/blogPost/AddPost";

// loggin authentication with fire & state
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  // signout
  function signOut() {
    fire.auth().signOut();
  }
  console.log(isLoggedIn);
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
        ) 
        : (
          <>
          <span onClick={signOut}>
            <a href="#">Sign out</a>
          </span>
          <Switch>
            <Route path="/add-post">
              <AddPost />
            </Route>
            <Route path="/">
              <ListAllPosts />
            </Route>              
          </Switch>
          </>
        )}
      </Router>
    </div>
  );
}
export default App;
