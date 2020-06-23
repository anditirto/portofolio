import React from 'react';
import axios from 'axios';
import './gallery.css';
import PokeCard from '../Gallery/PokeCard';

class Gallery extends React.Component {

 constructor() {
    super();
    this.state = {
      pokemons : [],
      pokemonDetails : [],
      pokemonsData:[],
      offset: 0,
      loadNumber: 24      
    }
    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.getPokemon = this.getPokemon.bind(this);
  }

  getNextOffset() {
    return this.state.offset+this.state.loadNumber;
  }

  handleMoreClick(event) {
    const newOffset = this.getNextOffset();
    this.setState({offset: newOffset}, () => {
      //console.log("Offset: " + this.state.offset)
      this.getPokemon();
    });
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon(){
       let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
        fetch(url)
        .then(response => response.json())
        .then(data =>{
          if(data){
            this.setState({pokemons: data.results});
          }else{
            console.log("data tidak ditemukan")
          }
        })
        .catch()
  }



  render() {

    return (
      <div className="container-card">
        {this.state.pokemons.map((item,index) => {
          return <PokeCard url={item.url} key={index} />
        })}
           <button type="button" style={{backgroundColor:"#3c5aa6"}} className="btn btn-secondary btn-block" key="more-button" id="more-button" onClick={this.handleMoreClick}>Load More</button>
      </div>
    );
  }
}

export default Gallery;