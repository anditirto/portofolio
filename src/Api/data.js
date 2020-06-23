import axios from 'axios';

const url='https://pokeapi.co/api/v2/pokemon';

export const fetchData = async(pokemon) => {
    let changeUrl = url;
    try{
        const { data }= await axios.get(`${url}/limit=1000`);

          const modifiedData = data.map((pokemonData) => ({
            name: pokemonData.results.name,
            pokemonUrl: pokemonData.results.url,
        })) 

        return modifiedData;
        console.log(modifiedData);

    }catch(error){

    }
}