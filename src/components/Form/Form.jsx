import React, {useState, useContext} from 'react';
import styles from "./Form.module.css";
import PokemonContext from "../../context/pokemon/pokemonContext";
import toast from "react-hot-toast";

const Form = () => {

   /* STATES */
   const [id, setId] = useState("");
   const [name, setName] = useState("");

   /* HOOKS */
   const pokeContext = useContext(PokemonContext);
   const { searchPokemon } = pokeContext;

   /* FUNCTIONS */
   const handleSubmit = (ev) => {
      ev.preventDefault();

      if (id.trim() === "" && name.trim() === ""){
         toast.error("Field ID or Name of the Pokemon is required");
         return;
      }

      const param = (id !== "") ? id : name;

      searchPokemon(param);
   }

   return (
      <div className={`${styles.container} animate__animated animate__fadeInUpBig`} >
         <form className={styles.formSearch} onSubmit={handleSubmit}>
            <input
               type="text"
               name="txtId"
               placeholder="ID de Pokemon"
               onChange={(ev) => setId(ev.target.value)}
            />
            <input
               type="text"
               name="txtName"
               placeholder="Nombre de Pokemon"
               onChange={(ev) => setName(ev.target.value)}
            />
            <div>
               <button type="submit">
                  SEARCH
               </button>
            </div>
         </form>
      </div>
   );
};

export default Form;
