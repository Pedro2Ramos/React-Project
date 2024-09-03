import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../contexts/ItemsContext";
import cart from "../assets/cart.png";

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(ItemsContext);
  const quantity = getTotalQuantity();

  return (
    <Link to="/cart">
      <img src={cart} height={30} alt="Cart" />
      {quantity > 0 && <span>{quantity}</span>}
    </Link>
  );
};
