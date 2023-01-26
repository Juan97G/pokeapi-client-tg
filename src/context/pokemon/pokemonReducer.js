export default (state, action) => {
   switch (action.type) {
      case "SEARCH_POKEMON":
         return {
            ...state,
            pokemonInfo: action.payload
         }

      case "RESET_DATA":
         return {
            ...state,
            pokemonInfo: {}
         }

      default:
         return state;
   }
}