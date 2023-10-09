import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { InfoData, InfoDataThree, InfoDataTwo } from './Data/infoData';
import { SliderData } from './Data/SliderData';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Rentals from './pages/Rentals';
import Latest from './Latest';
import Design from './Design';
import Home from './pages/Home';
import Interior from './pages/Interior';
import Modern from './pages/Modern';
import Checkout from './pages/Checkout';


// import Footer from './components/Footer';





function App() {

  const[isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <Router>
    <Routes>
    <Route path="/login">
    <GlobalStyle />
      <Login toggle={toggle} />   
      <Dropdown isOpen={isOpen} toggle={toggle} />

    </Route>
    <Route path="/homes">
    <GlobalStyle />
      <Home />
    </Route>
    <Route path="/modern">
    <Modern />
    </Route>
    <Route path="/interior">
    <GlobalStyle />
    <Interior />
    </Route>
    <Route path="/sign up">
    <GlobalStyle />
      <SignUp toggle={toggle} /> 
      <Dropdown isOpen={isOpen} toggle={toggle} />  
    </Route>
    <Route path="/rentals">
    <GlobalStyle />
      <Rentals toggle={toggle} />  
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </Route>
    <Route path="/checkout">
      <GlobalStyle />
        <Checkout />
    </Route>
    <Route>  
    <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData} />
      <Latest {...InfoDataTwo}/>
      <Design {...InfoDataThree}/>
      {/* <Footer /> */}
      </Route>
    </Routes>
    </Router>
  );
}

export default App;
