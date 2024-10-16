import React from "react";
import CardComponent from "./components/CardComponent";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Typography } from "@mui/material";

const Gallery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["photos"],
    queryFn: () => {
      return axios.get("https://jsonplaceholder.typicode.com/photos");
    },
  });
  //   console.log("data-", data.data, "loading-", isLoading, "error-", error);
  if (isLoading) {
    return (
      <Typography variant="p" sx={{ textAlign: "center" }}>
        Loading...
      </Typography>
    );
  }
  if (error) {
    return <p className="error">{error.message}</p>;
  }
  const album = data?.data?.filter(
    (item) => item.albumId === 1 || item.albumId === 2
  );
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 place-items-center m-2">
      {album?.map((cardData) => (
        <CardComponent
          key={`${cardData.albumId},-,${cardData.id}`}
          title={cardData.title}
          src={cardData.url}
        />
      ))}
    </div>
  );
};

export default Gallery;
