import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import particles from "react-particles-js";
import Contact from "./components/Contact";
import emailjs from 'emailjs-com';
import Dcon from "./components/Dcon";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
ReactDOM.render(
  <React.StrictMode>
  <>
  <particles
    params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'path/to/svg.svg'
                    }
                }}
  />
  <Navbar/>
  <Header/>
  <About/>
  <Portfolio/>
  <Contact/>
  <Footer/>
  
  
  </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
