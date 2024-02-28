import { useState, useEffect } from "react";

export const CartContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(fakeLoadingTimeout);
  }, []);

  return (
    <div>{isLoading ? <h2>Cargando...</h2> : <h1>Carrito de compras</h1>}</div>
  );
};
