import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FormLabel, TextField, Box, Button } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


const HeroDetail = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const history = useNavigate();
  const [fileLink, setFileLink] = useState([]);
  const [power, setPower] = useState([]);

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/heros/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setInputs(data.hero);
          setFileLink(data.hero.image);
          setPower(data.hero.superpowers);
        });
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/heros/${id}`, {
        nickname: String(inputs.nickname),
        real_name: String(inputs.real_name),
        origin_description: String(inputs.origin_description),
        superpowers: power.filter((f) => f !== ""),
        catch_phrase: String(inputs.catch_phrase),
        image: fileLink.filter((f) => f !== ""),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    sendRequest().then(() => history("/heros"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLinks = (e, index) => {
    setFileLink(
      fileLink.map((link, i) => {
        if (i === index) return e.target.value;
        return link;
      })
    );
  };

  const addPowerInput = () => {
    setPower([...power, ""]);
  };

  const handlePowers = (e, index) => {
    setPower(
      power.map((s, i) => {
        if (i === index) return e.target.value;
        return s;
      })
    );
  };

  const addLinkInput = () => {
    setFileLink([...fileLink, ""]);
  };

  return (
    <div>
      {inputs && (
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
              data-testid="button"
              value={inputs.nickname}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              name="nickname"
              
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
            <Button  type="plus" onClick={addPowerInput}  color="success">
              Add superpower... <AddBoxIcon/>
            </Button>
            

            {power.map((p, index) => (
              <TextField
                value={power[index]}
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
            <Button  type="plus" onClick={addLinkInput} color="success"  >
              Add image...<CameraAltIcon/>
            </Button>

            {fileLink.map((link, index) => (
              <TextField
                value={fileLink[index]}
                onChange={(e) => handleLinks(e, index)}
                margin="normal"
                variant="outlined"
                name="image"
              />
            ))}

            <Button  type="submit" variant="outlined" color="success" onClick={handleSubmit} sx={{ marginTop:5,  marginBottom: 15}} >
              Update hero
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};
export default HeroDetail;
