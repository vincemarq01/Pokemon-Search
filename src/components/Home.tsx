import React from 'react';

import { Link } from 'react-router-dom';
import { pokemonType } from '../interface';

interface pokemon {
  pokemons: pokemonType[];
}

const Home: React.FC<pokemon> = ({ pokemons }: pokemon) => {
  return (
    <div className="mt-10 p-4 flex flex-wrap">
      {pokemons.map((pokemon) => {
        return (
          <>
            <div className="ml-4 text-2xl text-blue-600">
              <Link to={`/about/${pokemon.index + 1}`} key={pokemon.index}>
                {pokemon.name}
              </Link>
            </div>
          </>
        );
      })}
    </div>

    // <>
    //   <div className="mt-10 p-4 flex flex-wrap">
    //     {pokemons?.map(({ name }: pokemonType, index) => (
    //       <>
    //         <div className="ml-4 text-2xl text-blue-600">
    //           <Link to={`/about/${index + 1}`} key={index}>
    //             {name}
    //           </Link>
    //         </div>
    //       </>
    //     ))}
    //   </div>
    // </>
  );
};

export default Home;
