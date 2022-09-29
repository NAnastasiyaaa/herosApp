import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Hero from "./images/Hero.png";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#008B8B" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <img
                src={Hero}
                style={{ width: "150px", padding: "6px" }}
                alt=""
              ></img>
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#D97D54",
              },
            }}
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              LinkComponent={NavLink}
              to="/add"
              label="Add a superhero"
              sx={{ fontWeight: "bold" }}
            ></Tab>
            
            <Tab
              LinkComponent={NavLink}
              sx={{ fontWeight: "bold" }}
              to="/heros"
              label="Heros"
            ></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
