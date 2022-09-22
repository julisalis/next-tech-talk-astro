const Pokemon = ({ pokemon }) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        width="200px"
        height="200px"
      />
      <img
        src={pokemon.imageFrontSprite}
        alt={pokemon.name}
        width="200px"
        height="200px"
      />
      <img
        src={pokemon.imageBackSprite}
        alt={pokemon.name}
        width="200px"
        height="200px"
      />
      <p>
        {pokemon.date} {pokemon.time}
      </p>
      <button onClick={() => alert("lalalala")}>Abrir alert</button>
    </div>
  );
};

export default Pokemon;
