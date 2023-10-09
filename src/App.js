import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./components/Home/Home";
import EditBook from "./components/Edit Book/EditBook";
import AddBook from "./components/Add Book/AddBook";
import Nav from "./components/Navigation/Nav";
import Body from "./components/Body";

function App() {
  return (
    <Router>
      <Body />
    </Router>
  );
}

export default App;
