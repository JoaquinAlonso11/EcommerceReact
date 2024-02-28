import { Navbar } from "./components/layout/Navbar";
import { CartContainer } from "./components/pages/Cart/CartContainer";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/EcommerceReact" element={<ItemListContainer />} />
            <Route
              path="/EcommerceReact/category/:category"
              element={<ItemListContainer />}
            />
            <Route path="/EcommerceReact/Cart" element={<CartContainer />} />
            <Route
              path="/EcommerceReact/item/:id"
              element={<ItemDetailContainer />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
