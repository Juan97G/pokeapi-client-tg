import React, { useReducer } from "react";
import pokemonReducer from "./pokemonReducer";
import axios from "axios";
import PokemonContext from "./pokemonContext";
import toast from "react-hot-toast";


const PokemonState = (props) => {

   /* INITIAL STATE */
   const initialState = {
      pokemonInfo: {}
   }
   
   
   /* USE REDUCER */
   const [state, dispatch] = useReducer(pokemonReducer, initialState);


   /* FUNCTIONS */

   const searchPokemon = async (param) => {
      try{
         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`);

         dispatch({
            type: "SEARCH_POKEMON",
            payload: response.data
         })
      } catch (err) {
         dispatch({
            type: "RESET_DATA"
         })

         toast.error("Error when consulting the indicated Pokemon");
      }
   }


   return (
      <PokemonContext.Provider
         value={{
            pokemonInfo: state.pokemonInfo,
            searchPokemon
         }}
      >
         {props.children}
      </PokemonContext.Provider>
   )

}

export default PokemonState;