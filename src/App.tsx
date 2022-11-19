import React from 'react';
import './App.css';
import MyHeader from './MyHeader';
import { useState, useEffect } from 'react';


function App() {
  const [ApiResponse, setSetApiResponse] = useState()
  const [pokeurlnumber, setpokeurlnumber] = useState('')
 
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeurlnumber}`)
      .then(response => response.json())
      .then(data => setSetApiResponse(data.results));
      
    return () => {
      
    }
  }, [pokeurlnumber])
  

  return (
    <>
    <div className="App">
    <MyHeader name="Developer"/>
        <h1>Hello world</h1>
    </div>
    </>
  )
};

export default App;
