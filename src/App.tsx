import React from 'react';
import './App.css';
import MyHeader from './MyHeader';
import { useState, useEffect } from 'react';
import './App.css';

class Pokemon {
  name: string;
  url: string;
  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}

function App() {
  const [ApiResponse, setApiResponse] = useState({})
  const [PokeData, setPokeData] = useState({'name': 'Loading...', 'url': 'Loading...'})
  const [PokeName, setPokeName] = useState('')
  const [pokeurlnumber, setpokeurlnumber] = useState('1')
 
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeurlnumber}`)
      .then(response => response.json())
      .then(data => setApiResponse(data));
    // setPokeData(new Pokemon(ApiResponse.name, ApiResponse.url));
    setPokeData(
      new Pokemon(
        PokeData.name,
        PokeData.url
      )
    );
    console.log(PokeData);
    console.log(ApiResponse);
    
    return () => {
      
    }
  }, [pokeurlnumber])

 
  return (
    <>
    <div className="App">
    <MyHeader name="Developer Dad"/>
        <h1>Hello Dalton 😍❤</h1>
        <p>{pokeurlnumber}</p>
        <p>{PokeData.name}</p>
        <p>{PokeData.url}</p>
    </div>
    </>
  )
};

export default App;
