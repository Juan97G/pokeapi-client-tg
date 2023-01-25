import React from 'react';
import styles from "./Form.module.css";

const Form = () => {
   return (
      <div className={styles.container}>
         <form className={styles.formSearch}>
            <input type="text" name="txtId" placeholder="ID de Pokemon"/>
            <input type="text" name="txtName" placeholder="Nombre de Pokemon"/>
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
