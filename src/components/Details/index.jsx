import React from "react";
import { useParams } from "react-router-dom";
import { card } from "../../mock/card";

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      {card
        .filter((value) => value.id === id)
        .map((item) => {
          return <p>{item.title}</p>;
        })}
    </div>
  );
};

export default Details;
