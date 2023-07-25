import React from 'react';
import '../styles/App.css';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
