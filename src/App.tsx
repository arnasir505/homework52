import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='playingCards faceImages'>
      <Card rank='2' suit='♦' />
      <Card rank='3' suit='♥' />
      <Card rank='4' suit='♣' />
      <Card rank='5' suit='♠' />
    </div>
  );
}

export default App;
