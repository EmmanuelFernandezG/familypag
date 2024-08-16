import { Stack } from "@mui/material";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import image from "../aniversario.jpg";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Opacity } from "@mui/icons-material";
function ContenidoComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const itemData = [
    "https://trupercorp-my.sharepoint.com/personal/efernandezg_truper_com/Documents/IMAGENES/team.jpg",
    "https://trupercorp-my.sharepoint.com/personal/efernandezg_truper_com/Documents/IMAGENES/aniversario.jpg",
    "https://trupercorp-my.sharepoint.com/personal/efernandezg_truper_com/Documents/IMAGENES/todos.jpg",
    "https://media.wired.com/photos/595fcc760926f632ae70c52d/master/w_1600,c_limit/FlagFootball-TA.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % itemData.length);
    }, 5500);

    return () => {
      clearInterval(timer);
    };
  }, [itemData.length]);

  return (
    <Stack
    sx={{opacity:'100%'}}
      style={{ marginTop: 0, marginLeft: 50 }}
      direction="column"
      spacing={1}
    >
      <Button
        variant="text"
        onClick={() => {
          alert("¡Bienvenido!");
        }}
      >
        <h4 variant="outlined">
          <strong>Inscríbete!!!</strong>
        </h4>
      </Button>
      <Stack direction='row' spacing={2} >
        <img
          src={itemData[currentImageIndex]}
          alt="ContenidoComponent"
          width="45%"
          height='350px'
          style={{ borderRadius: "20%" }}
        />
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2739.551980452548!2d-99.58321709587887!3d19.368396568716378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDIyJzA1LjQiTiA5OcKwMzQnNTYuMCJX!5e0!3m2!1sen!2smx!4v1720550313005!5m2!1sen!2smx" width="45%" height="350" style={{ borderRadius: "10%", border:'2px solid orange' }}   allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div></div>
        </Stack>
    </Stack>
  );
}

export default ContenidoComponent;
