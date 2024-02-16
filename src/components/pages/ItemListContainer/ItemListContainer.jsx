import ItemList from "./ItemList";
import { useState, useEffect } from "react";

export const ItemListCointainer = () => {
  const [items, setItems] = useState([]);

  const [nombre, setNombre] = useState("pepusa");

  const saludar = () => {
    setNombre("marilyn");
  };
  const saludar2 = () => {
    setNombre("pepusa");
  };

  useEffect(() => {
    console.log("Confirmo petiicion");
  }, []);

  return <ItemList nombre={nombre} saludar={saludar} saludar2={saludar2} />;
};
