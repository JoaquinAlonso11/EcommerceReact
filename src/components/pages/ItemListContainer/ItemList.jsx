import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ItemList = ({ nombre, saludar, saludar2 }) => {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: { md: "#FFEAEC" },
          minHeight: "99vh",
          boxShadow: { md: "0 2px 4px rgba(0, 0, 0, 0.1)" },
        }}
      >
        <Grid item align="center">
          <h2>Hola {nombre}</h2>
          <button onClick={saludar}>Saludar</button>
          <button onClick={saludar2}>Saludar2</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemList;

ItemList.propTypes = {
  greeting: PropTypes.any.isRequired,
};
