import React from "react";
import Card from "./components/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Gallery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["photos"],
    queryFn: () => {
      return axios.get("https://jsonplaceholder.typicode.com/photos");
    },
  });
  //   console.log("data-", data.data, "loading-", isLoading, "error-", error);
  if (isLoading) {
    return <p className="m-2 center">Loading...</p>;
  }
  if (error) {
    return <p className="error">{error.message}</p>;
  }
  const album = data?.data?.filter(
    (item) => item.albumId === 1 || item.albumId === 2
  );
  console.log(album);
  return (
    <div className="grid grid-cols-3 gap-2 place-items-center m-2">
      {album?.map((cardData) => (
        <Card
          key={`${cardData.albumId},-,${cardData.id}`}
          title={cardData.title}
          src={cardData.url}
        />
      ))}
    </div>
  );
};

export default Gallery;
