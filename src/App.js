import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import "./css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/main/Form";
import { useSelector } from "react-redux";
import AddForm from "./components/main/AddForm";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Main />}></Route>
        <Route path="/book/add" element={<AddForm />}></Route>
        <Route path="/book/update/:id" element={<Form />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
