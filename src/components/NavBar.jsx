export default function NavBar({ setPokemonIndex, pokemonIndex, pokemonList }) {
  function countMore() {
    setPokemonIndex(pokemonIndex + 1);
  }

  function countLess() {
    setPokemonIndex(pokemonIndex - 1);
  }
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={countLess}>Précédent</button>
      ) : (
        <div></div>
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={countMore}>Suivant</button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
