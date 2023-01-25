import React, {useState, useEffect} from 'react';
import styles from "./Chip.module.css";

const Chip = (props) => {

   /* STATES */
   const [infoChips, setInfoChips] = useState([]);

   /* DESTRUCTURING */
   const {data, type, color} = props;

   useEffect(() => {
      loadDataChips();
   }, []);


   /* FUNCTIONS */
   const loadDataChips = () => {
      const array = [];

      if(type === 'ability'){
         data.map((value) => array.push(value.ability.name));
      } else if(type === 'move'){
         data.map((value) => array.push(value.move.name));
      }

      setInfoChips(array);
   }

   return (
      <div className={styles.container}>
         { infoChips.map((val, i) => (
            <span style={{backgroundColor: color}} key={i}>
               {val}
            </span>
         )) }
      </div>
   );
};

export default Chip;
