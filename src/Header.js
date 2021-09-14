import './App.css';
// import styled from '@emotion/styled'; // CSS-in-JS API
// import { useState } from 'react';
import logo from './bananas.svg';

// Header including rotating image of bananas and headline
export default function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-headline">Randomize til you go bananas!</h1>
        <img src={logo} className="App-logo" alt="rotating bananas" />
      </header>
    </div>
  );
}
