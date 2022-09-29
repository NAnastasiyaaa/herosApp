import React, { useState } from "react";
import { FormLabel, TextField, Box, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const AddHero = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    nickname: "",
    real_name: "",
    origin_description: "",
    superpowers: [],
    catch_phrase: "",
    image: [],
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/heros", {
        nickname: String(inputs.nickname),
        real_name: String(inputs.real_name),
        origin_description: String(inputs.origin_description),
        superpowers: Array(inputs.superpowers),
        catch_phrase: String(inputs.catch_phrase),
        image: inputs.image.filter((f) => f !== ""),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    sendRequest().then(() => history("/heros"));
  };

  const handleLinks = (e, index) => {
    setInputs({
      ...inputs,
      image: inputs.image.map((link, i) => {
        if (i === index) return e.target.value;
        return link;
      }),
    });
  };

  const addLinkInput = () => {
    setInputs({ ...inputs, image: [...inputs.image, ""] });
  };

  const addPowerInput = () => {
    setInputs({ ...inputs, superpowers: [...inputs.superpowers, ""] });
  };

  const handlePowers = (e, index) => {
    setInputs({
      ...inputs,
      superpowers: inputs.superpowers.map((link, i) => {
        if (i === index) return e.target.value;
        return link;
      }),
    });
  };

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={5}
      >
        <FormLabel>Nickname</FormLabel>
        <TextField
          value={inputs.nickname}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="nickname"
          placeholder="nickname"
        />
        <FormLabel>Real name</FormLabel>
        <TextField
          value={inputs.real_name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="real_name"
        />
        <FormLabel>Origin description</FormLabel>
        <TextField
          value={inputs.origin_description}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="origin_description"
        />

        <FormLabel>Superpowers</FormLabel>
        <Button type="plus" onClick={addPowerInput} color="success">
          Add superpower... <AddBoxIcon />
        </Button>

        {inputs.superpowers.map((link, index) => (
          <TextField
            value={inputs.superpowers[index]}
            onChange={(e) => handlePowers(e, index)}
            margin="normal"
            variant="outlined"
            name="superpowers"
          />
        ))}
        <FormLabel>Catch_phrase</FormLabel>
        <TextField
          value={inputs.catch_phrase}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          name="catch_phrase"
        />

        <FormLabel>Image</FormLabel>
        <Button type="plus" onClick={addLinkInput} color="success">
          Add image...
          <CameraAltIcon />
        </Button>

        {inputs.image.map((link, index) => (
          <TextField
            value={inputs.image[index]}
            onChange={(e) => handleLinks(e, index)}
            margin="normal"
            variant="outlined"
            name="image"
          />
        ))}

        <Button
          type="submit"
          variant="outlined"
          color="success"
          onClick={handleSubmit}
          sx={{ marginTop: 5, marginBottom: 15 }}
        >
          Add hero
        </Button>
      </Box>
    </div>
  );
};

export default AddHero;
