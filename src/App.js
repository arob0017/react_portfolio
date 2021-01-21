import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/";
import Footer from "./components/Footer/";
import Main from "./components/Main/";
import './App.css';

import Home from "./pages/Home/";
import Portfolio from "./pages/Portfolio/";
import Contact from "./pages/Contact/";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Main>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;