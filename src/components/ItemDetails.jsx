import React from "react";
import Container from "react-bootstrap/Container";
import { ItemCount } from "./ItemCount";

export const ItemDetails = ({ item, onAdd }) => {
  return (
    <Container className="mt-4">
      <h1>{item.title}</h1>
      <h2>{item.category}</h2>
      <h3>{item.description}</h3>
      <img src={item.pictureUrl} alt="" height={200} />
      <br />
      <b>${item.price}</b>
      <br />
      <b>{item.stock}</b>
      <ItemCount stock={item.stock} onAdd={onAdd} />
    </Container>
  );
};
