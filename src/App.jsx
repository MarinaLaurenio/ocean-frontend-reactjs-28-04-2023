import "./App.css";
import Card from "./components/Card/Card";

const pikachu = {
  nome: "Pikachu",
  imagemUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
};

const charmander = {
  nome: "Charmander",
  imagemUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
};
const bulbasaur = {
  nome: "Bulbasaur",
  imagemUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
};

const itens = [pikachu, charmander, bulbasaur];

function App() {
  return (
    <>
      <h1>Samsung Ocean</h1>
      <div className="cards">
        {itens.map(function (cadaItem, index) {
          return <Card item={cadaItem} key={`card_${index}`} />;
          /*o key é só para acertar o ordem */
        })}
      </div>
    </>
  );
}

export default App;
