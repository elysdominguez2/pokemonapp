import "./App.css";
import { Routes, Route } from "react-router-dom"; //13-Importar Routes y Route y abajo
//ponerla para que abrace cada página y le de el path y el element
import PokemonDiscoveryPage from "./pages/PokemonDiscoveryPage"; //14-Importar
//a que pagina va ir dirigido ese path y element que puse abajo
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonDiscoveryPage />} />
        <Route path="/details/:pokemon_name" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
