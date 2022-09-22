import "./index.css";
const PokemonList = ({ pokemons }) => {
  return (
    <div className="container">
      <ul className="list">
        {pokemons.map((p) => (
          <li key={p.id} className="pokemon">
            <a href={`/pokemon/${p.name}`}>
              <div className="pokemonLink">
                <img src={p.img} alt={p.name} width="100px" height="100px" />
                {p.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
