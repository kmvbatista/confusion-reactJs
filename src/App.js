import React, {useState} from 'react';
import MainComponent from './components/MainComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <MainComponent></MainComponent>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
