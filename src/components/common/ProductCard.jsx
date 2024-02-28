import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, img, title, description, price }) => {
  return (
    <div
      style={{
        border: "1px solid purple",
        width: "500px",
        height: "500px",
      }}
    >
      <img
        src={img}
        alt=""
        style={{ width: "300px", height: "300px", margin: "10px" }}
      />
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
      <Link to={`/EcommerceReact/item/${id}`}>
        <Button color="secondary">Detalles</Button>
      </Link>
    </div>
  );
};
