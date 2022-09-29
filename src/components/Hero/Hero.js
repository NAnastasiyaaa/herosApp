import React from "react";
import { Button, LinkComponent } from "@mui/material";
import "./Hero.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Hero = (props) => {
  const history = useNavigate();
  const { _id, nickname, image } = props.hero;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/heros/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/heros"));
  };

  return (
    <div className="card">
      {image.length !== 0 && <img src={image[0]} alt={image.originalname} />}
      <h3>{nickname}</h3>
      <Button data-testid="search-button" LinkComponent={Link} to={`/heros/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{ mt: "auto" }} >
        Delete
      </Button>
    </div>
  );
};

export default Hero;
