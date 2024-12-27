// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "./fonts.css";
import MiniNav from './components/MiniNav';
import Navbarreact from "./components/navbar";
import Home from './components/Home';
import Weworkwith from './components/Weworkwith';
import Footer from './components/Footer.js';

import Projects from './components/Projects';
import AboutUS from './components/AboutUS';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import ProjectDetail from "./components/ProjectDetail";
import Register from "./components/Register"; 
import Login from "./components/login";  
import Quote from "./components/quote";
import Blog from "./components/Blog";
import Career from "./components/Career";
import BlogDetail from "./components/BlogDescription";
import BlogDetail2 from "./components/BlogDescription2";
import BlogDetail3 from "./components/BlogDescription3";
import BlogDetail4 from "./components/BlogDescription4";
import BlogDetail5 from "./components/BlogDescription5";
import BlogDetail6 from "./components/BlogDescription6";
import BlogDetail7 from "./components/BlogDescription7";
import Career_Detail from "./components/CareerDetail";
import Sample from "./components/Sample";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import StatsBoard from "./components/StatsBoard";

import CoreValues from "./components/CoreValues";
import FaqPage from "./components/FaqPage";
import React, { useState } from "react";

// import ProjectName1 from './components/ProjectName1';

function App() {
  const [images, setImages] = useState([]);
  return (
    <>
      <BrowserRouter>
        {/* <MiniNav setImages={setImages} /> */}
        <Navbarreact />
        {/* <Navbar/>
          <ProductList/>
          <ProjectName1 />
          <Weworkwith /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weworkwith" element={<Weworkwith />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUS" element={<AboutUS />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/ProjectDetail/:projectId" element={<ProjectDetail />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/Blog_Detail" element={<BlogDetail />} />
          <Route path="/Blog_Detail2" element={<BlogDetail2 />} />
          <Route path="/Blog_Detail3" element={<BlogDetail3 />} />
          <Route path="/Blog_Detail4" element={<BlogDetail4 />} />
          <Route path="/Blog_Detail5" element={<BlogDetail5 />} />
          <Route path="/Blog_Detail6" element={<BlogDetail6 />} />
          <Route path="/Blog_Detail7" element={<BlogDetail7 />} />
          <Route path="/Career_Detail" element={<Career_Detail />} />
          <Route path="/Sample" element={<Sample />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/StatsBoard" element={<StatsBoard />} />
          <Route path="/CoreValues" element={<CoreValues />} />
          <Route path="/FaqPage" element={<FaqPage />} />
        </Routes>

        <Footer images={images} />
      </BrowserRouter>
    </>
  );
}

export default App;
