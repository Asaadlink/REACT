const BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite Pokémon is Squirtle</p>
      <ul>
        {props.abilities.map((abilitie, index) => {
          return <li key={index}>{abilitie}</li>;
        })}
      </ul>
    </div>
  );
};
export default BestPokemon;
