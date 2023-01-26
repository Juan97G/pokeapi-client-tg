import Header from "./components/Header";
import CardInformation from "./components/CardInformation";
import Form from "./components/Form";
import PokemonState from "./context/pokemon/pokemonState";
import { Toaster } from "react-hot-toast";

function App() {
   return (
      <>
         <PokemonState>
            <Header />
            <main>
               <CardInformation />
               <Form />
            </main>
            <Toaster
               position="top-right"
               toastOptions={{
                  duration: 6000,
                  style: {
                     fontWeight: 600
                  }
               }}
            />
         </PokemonState>
      </>
   );
}

export default App;
