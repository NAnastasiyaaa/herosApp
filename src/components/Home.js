import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Hero from "./images/Hero.png";


const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/heros"
          sx={{ marginTop: 15, background:"orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View all superheros</Typography>
          <img
                src={Hero}
                style={{ width: "150px", padding: "6px" }}
                alt=""
              ></img>
        </Button>

      </Box>
    </div>
  );
};

export default Home;
