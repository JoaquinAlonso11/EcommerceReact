import Counter from "./components/common/Counter"
import { Navbar } from "./components/layout/Navbar"
import { ItemListCointainer } from "./components/pages/ItemListCointainer"

function App() {

  

  return (
    <div>
      <Navbar />

      <Counter />

      <ItemListCointainer greeting="Hola como estas? Bienvenido a mi E-commerce" />
      
    

      
    </div>
  )
}

export default App
