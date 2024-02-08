import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";

export const ItemListCointainer = ({ greeting }) => {
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
                    <Typography variant="h2" sx={{ color: { md: "#AE1D74" } }}>
                        {greeting}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
ItemListCointainer.propTypes = {
    greeting: PropTypes.any.isRequired,
  };