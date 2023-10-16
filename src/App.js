import './App.css';
import React from 'react';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Header from './Components/Header';
import BookingForm from './Components/BookingForm';

import Footer from './Components/Footer';

function App() {
  return (
    <>
        <Nav/>
        <Header/>
        <BookingForm/>
      </>
  );
}

export default App;
