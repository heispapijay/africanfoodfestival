import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <Routes>
      <Route path="/" />
      <Route index element= {<Header data={landingPageData.Header} /> } />    
      <Route path="about" element= {<About data={landingPageData.About} />} />
      <Route path="features" element= {<Features data={landingPageData.Features} />} />
      <Route path="guest" element= {<Team data={landingPageData.Team} />} />      
      </Routes>
      <Contact data={landingPageData.Contact} />
      </BrowserRouter>
    </div>
  );
};

export default App;