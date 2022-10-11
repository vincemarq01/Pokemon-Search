import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pokemonType } from '../interface';

const About = () => {
  const { slug } = useParams();
  const [pokemons, setPokemon] = useState<pokemonType>();
  const getPokemon = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      }); // const { results } = await response.json();
  };

  useEffect(() => {
    getPokemon();
  }, [slug]);

  return (
    <div className="ml-4 text-2xl text-blue-600">
      {pokemons?.name}
      <img src={pokemons?.sprites.front_shiny}></img>
      <img src={pokemons?.sprites.back_shiny}></img>
    </div>
  );
};

export default About;
