//15- poner una funcion que solo retorne un titulo <h1> para comprobar
//que todo esta funcionando en la pantalla.
//16-Instalar los Routs en la terminal
//17-Instalo y requiero Axios

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const axios = require("axios"); //Aca estoy haciendo el require de AXIOS

//18- dentro de la funcion React hago el UseEffect con try and catch
function PokemonDiscoveryPage() {
  const [pokemons, set_Pokemons] = useState([]);

  useEffect(() => {
    const doSomeDataetching = async () => {
      console.log("I`m gonna fetch some data");
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=151`
        );
        console.log(response.data);
        set_Pokemons(response.data.results);
      } catch (e) {
        console.log(e.message);
      }
    };
    doSomeDataetching();
  }, []);

  console.log("what is in my state", pokemons);

  return (
    <div>
      <h1>Hello from Home</h1>
      <p>
        Response:
        {pokemons.map((pokemon) => {
          return (
            <div className="PokemonList">
              <Link to={`/details/${pokemon.name}`}>{pokemon.name}</Link>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default PokemonDiscoveryPage;
