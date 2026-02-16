
import './App.css';
import './Respon.css';
import Header from './pages/Header'
import Hero from './pages/Hero'
import Product from './pages/Product';
import Pinkslider from './pages/Pinkslider';
import Fotter from './pages/Fotter';
import About from './pages/About';
import Gallery2 from './pages/Gallery2';
import Gallery3 from './pages/Gallery3';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import All from './pages/All';
import React from "react";
import Login from "./pages/Login"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <>
      {/* <Header></Header> */}
      {/* <Hero></Hero> */}
      {/* <Product></Product> */}
      {/* <Pinkslider></Pinkslider> */}
      {/* <Fotter></Fotter> */}
      {/* <About></About> */}
      {/* <Gallery2></Gallery2> */}
      {/* <Gallery3></Gallery3> */}
      {/* <Blog></Blog> */}
      {/* <Shop></Shop> */}
      {/* <Contact></Contact> */}
      {/* <All></All> */}
      <Login></Login>

      {/* <Router>
        <Header></Header>

        <Switch>
          <Route path="/Header"><Header /></Route>
          <Route exact path="/"><All /></Route>
          <Route path="/About"><About /></Route>
          <Route path="/Gallery2"><Gallery2 /></Route>
          <Route path="/Gallery3"><Gallery3 /></Route>
          <Route path="/Blog"><Blog /></Route>
          <Route path="/Shop"><Shop /></Route>
          <Route path="/Contact"><Contact /></Route>
          <Route path="/Fotter"><Fotter /></Route>
        </Switch>

        <Fotter></Fotter>
      </Router> */}
      
    </>
  );
}

export default App;


