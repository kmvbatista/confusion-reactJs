import React, {useState} from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux'
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

function App() {
  const store = ConfigureStore();
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
          <MainComponent></MainComponent>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
