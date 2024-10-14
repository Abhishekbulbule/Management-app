import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CardComponent = ({ title, src }) => {
  return (
    <Card
      elevation={12}
      sx={{ maxWidth: 300, minHeight: 350, maxHeight: 350, margin: 4 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={src || "https://via.placeholder.com/400"}
          sx={{ height: 250, width: 300 }}
          loading="lazy"
          alt="card img"
        />
        <CardContent>
          <Typography gutterBottom variant="body" component={"p"}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
