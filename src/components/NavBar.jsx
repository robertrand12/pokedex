export default function NavBar({ pokemonList, changePokemonIndex }) {
  return (
    <div>
      {pokemonList.map((poke, index) => (
        <button key={poke.name} onClick={() => changePokemonIndex(index)}>
          {poke.name}
        </button>
      ))}
    </div>
  );
}
