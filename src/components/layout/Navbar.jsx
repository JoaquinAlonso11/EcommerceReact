import { Button, Grid, Typography } from "@mui/material";
import CartWidget from "../common/CartWidget";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ position: "relative" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: { md: "#FFEAEC" },
          boxShadow:
            "rgba(174, 29, 116, 0.2) 0px -10px 18px -12px inset, rgba(174, 29, 116, 0.2) 0px -12px 18px -18px inset",
          height: "4rem",
        }}
      >
        <Grid item md={3} align="center">
          <Typography variant="h5" sx={{ color: { md: "#AE1D74" } }}>
            DoñaDona
          </Typography>
        </Grid>
        <Grid item md={6} align="center">
          <Link to="/EcommerceReact">
            <Button color="secondary">Todas</Button>
          </Link>
          <Link to="/EcommerceReact/category/simples">
            <Button color="secondary">Simples</Button>
          </Link>
          <Link to="/EcommerceReact/category/rellenas">
            <Button color="secondary">Rellenas</Button>
          </Link>
        </Grid>
        <Grid item md={3} align="center">
          <Link to="/EcommerceReact/Cart">
            <CartWidget />
          </Link>
        </Grid>
      </Grid>
      <Outlet />
    </div>
  );
};
