import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import { useEffect, useState, useMemo } from 'react';
import About from './components/About';
import { pokemonType } from './interface';

const App: React.FC = () => {
  const [pokemons, setPokemon] = useState<pokemonType[]>([]);
  const [filterpokemons, setFilteredPokemon] = useState<pokemonType[]>([]);
  const [text, setText] = useState<string>();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0')
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map(
          (pokemon: pokemonType, index: number) => {
            return { ...pokemon, index };
          }
        );

        setPokemon(results);
        //setPokemon((pepe) => ({ ...pepe, results }));
        console.log(results);
      });
  }, []);

  useMemo(() => {
    if (!text) {
      setFilteredPokemon([]);
      return;
    }

    setFilteredPokemon(() =>
      pokemons.filter((pokemon) => pokemon.name.includes(text))
    );
  }, [pokemons, text]);

  return (
    <Router>
      <div className="p-14">
        <div className="flex flex-col items-center">
          <Link to="/">
            <header className="text-4xl text-yellow-700">Pokemon Picker</header>
          </Link>
        </div>

        <div className="w-full flex justify-center">
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.currentTarget.value)
            }
            placeholder="Enter Pokemon"
            className="mt-10 p-2 border-blue-600 border-2"
          ></input>
        </div>
      </div>

      <Routes>
        <Route path="/about/:slug" element={<About />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home pokemons={filterpokemons} />} />
      </Routes>
    </Router>
  );
};

export default App;
