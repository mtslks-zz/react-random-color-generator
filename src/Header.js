import './App.css';
import styled from '@emotion/styled'; // CSS-in-JS API
import { useState } from 'react';
import logo from './bananas.svg';

export default function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="rotating bananas" />
        <h1 className="App-headline">Randomize til you go bananas!</h1>
      </header>
    </div>
  );
}
