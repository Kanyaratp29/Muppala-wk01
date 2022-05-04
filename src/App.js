import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import "./App.css";
import { DISHES } from "./shared/dishes";
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
      </div>
    );
  }
}

export default App;