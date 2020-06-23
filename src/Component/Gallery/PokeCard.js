import React, { useState, useEffect } from "react";


const PokeCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonImg, setPokemonImg] = useState({});
  const [abilities, setAbilities] = useState([]);
  useEffect(() => {
    let urlPokemon = url;
    fetch(urlPokemon)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setPokemonImg(data.sprites);
        setAbilities(data.abilities);
      });
  }, [url]);
  return (
    <div className="card text-center mx-auto" >
      <div className="card-header" >{pokemon.name}</div>
      <div className="card-body">
        <img src={pokemonImg["front_shiny"]} alt="front" />
      </div>
      <div className="card-footer" >
      <span className="titleAbility"> Ability </span>
        {abilities.map((item, index) => {
          return (
            <div className="ability" key={index}>
              <span >{item.ability.name} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokeCard;
