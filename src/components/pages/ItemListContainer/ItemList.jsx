import { Grid } from "@mui/material";
import { ProductCard } from "../../common/ProductCard";
const ItemList = ({ products }) => {
  return (
    <div>
      <Grid
        container
        display={"flex"}
        sx={{
          backgroundColor: { md: "#FFEAEC" },
          minHeight: "99vh",
          justifyContent: "center",
        }}
      >
        <Grid item align="center" display={"flex"}>
          <div>
            {products.map(({ id, img, title, description, price }) => {
              return (
                <ProductCard
                  key={id}
                  id={id}
                  img={img}
                  title={title}
                  description={description}
                  price={price}
                />
              );
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemList;
