import { useState } from "react";

export const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < stock) setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleAdd = () => {
    console.log(`Cantidad seleccionada: ${count}`);
    onAdd(count);
    setCount(1);
  };

  return (
    <>
      <button onClick={handleDecrease}>-</button>
      <span style={{ color: "black", margin: "0 10px" }}>{count}</span>
      <button onClick={handleIncrease}>+</button>
      <br />
      <button onClick={handleAdd}>Comprar</button>
    </>
  );
};
