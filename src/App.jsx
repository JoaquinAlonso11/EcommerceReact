import { Navbar } from "./components/layout/Navbar";
import { ItemCountContainer } from "./components/common/itemCount/ItemCountContainer";

function App() {
  return (
    <div>
      <ItemCountContainer stock={4} />
      <ItemCountContainer stock={5} />
      <ItemCountContainer stock={3} />
      <ItemCountContainer stock={6} />
    </div>
  );
}

export default App;
