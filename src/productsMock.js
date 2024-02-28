export let products = [
  {
    id: 1,
    title: "Dona clasica",
    price: 95,
    description: "Dona clasica Original",
    img: "https://res.cloudinary.com/dlrm4vwkg/image/upload/v1708352811/DOE-Donuts--Core-Flavour--Cinnamon-Sugar_enenlt.jpg",
    stock: 10,
    category: "simples",
  },
  {
    id: 2,
    title: "Chocolate garnache ",
    price: 110,
    description: "Dona clasica con cobertura de chocolate",
    img: "https://res.cloudinary.com/dlrm4vwkg/image/upload/v1708353287/DOE-Donuts--Core-Flavour--Chocolate-Ganache_ukopng.jpg",
    stock: 10,
    category: "simples",
  },
  {
    id: 3,
    title: "Glaseada de vainilla",
    price: 110,
    description: "Dona clasica con glaseado de vainilla",
    img: "https://res.cloudinary.com/dlrm4vwkg/image/upload/v1708353749/DOE-Donuts--Core-Flavour--Vanilla-Glaze_cxmjtp.jpg",
    stock: 10,
    category: "simples",
  },
  {
    id: 4,
    title: "Tiramisu",
    price: 130,
    description:
      "Dona original, rellena con lo mas rico del tiramisu y con cobertura de chocolate",
    img: "https://res.cloudinary.com/dlrm4vwkg/image/upload/v1708353640/DOE-Donuts--Core-Flavour--Tiramisu-_1_qnmbm5.jpg",
    stock: 10,
    category: "rellenas",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos disponibles");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos disponibles");
    }
  });
};
