//19- Aca estoy haciendo que desde un link del nombre del Pokemon yo
//pueda traer una nueva pagina con el nombre del pokemon.
//la primera parte del return es la constante que yo use para mi
//useParams, despues de eso esta .pokemon_name y esa es la ruta que
//yo use en App.js para nombrar esa pagina

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const axios = require("axios");

function PokemonDetails() {
  const [pokemon, set_Pokemon] = useState(null);
  const route_parameters = useParams();

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      try {
        // Getting back data from the net, through the wire, air, and the ocean:
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${route_parameters.pokemon_name}`
        );

        console.log("Got back:", response);
        set_Pokemon(response.data);
      } catch (e) {
        console.log(e.message);
      }
    }
    doSomeDataFetching();
  }, [route_parameters.pokemon_name]);
  console.log("what is in my state", pokemon);

  // early return
  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h2>{route_parameters.pokemon_name}</h2>
      {
        <div>
          <span>Weight: {pokemon.weight}</span>

          <img src={pokemon.sprites.front_default} />
        </div>
      }
    </div>
  );
}

export default PokemonDetails;
