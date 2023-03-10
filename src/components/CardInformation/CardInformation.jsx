import React, {useContext} from 'react';
import styles from "./CardInformation.module.css";
import Chip from "../Chip";
import PokemonContext from "../../context/pokemon/pokemonContext";
import axios from "axios";
import toast from "react-hot-toast";
import 'animate.css';


const CardInformation = () => {

   /* HOOKS */
   const pokeContext = useContext(PokemonContext);
   const {pokemonInfo} = pokeContext;

   /* FUNCTIONS */
   const savePokemon = async () => {
      const response = await axios.post("http://localhost:4000/api/pokemon", pokemonInfo);

      if(response.status === 201) toast.success(response.data.msg);
      if(response.status !== 201) toast.error(response.data.msg);
   }

   return (
      <div className={`${styles.container} animate__animated animate__fadeInDownBig`}>
         {
            Object.entries(pokemonInfo).length === 0
            ? (
               <p>Enter the ID or Name of a Pokemon to display the information.</p>
            )
            : (
               <>
                  <div className={styles.bgBlue}/>
                  <div className={styles.bgImage}>
                     <img src={pokemonInfo.sprites.front_default} alt="" width={100}/>
                  </div>
                  <div className={styles.information}>
                     <h2>{pokemonInfo.name}</h2>
                     <div className={styles.informationDetailOne}>
                        <div>
                           <h4>Height</h4>
                           <h5>{pokemonInfo.height / 10} m</h5>
                        </div>
                        <div>
                           <h4>Weight</h4>
                           <h5>{pokemonInfo.weight / 10} kg</h5>
                        </div>
                     </div>
                     <div className={styles.informationDetailTwo}>
                        <h4>Abilities</h4>
                        <Chip
                           data={pokemonInfo.abilities}
                           type="ability"
                           color="#151D3B"
                        />
                     </div>
                     <div className={styles.informationDetailTwo}>
                        <h4>Moves</h4>
                        <Chip
                           data={pokemonInfo.moves.slice(0, 15)}
                           type="move"
                           color="#D82148"
                        />
                     </div>
                     <div className={styles.contButton}>
                        <button type="submit" onClick={() => savePokemon()}>
                           SAVE IN DATABASE
                        </button>
                     </div>
                  </div>
               </>
            )
         }
      </div>
   );
};

export default CardInformation;
