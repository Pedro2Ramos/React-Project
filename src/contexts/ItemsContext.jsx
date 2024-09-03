import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const reset = () => setItems([]);

  const addItem = (item) => {
    console.log("Intentando agregar ítem:", item);

    const alreadyExists = items.some((i) => i.id === item.id);

    if (alreadyExists) {
      const newItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + item.quantity };
        } else {
          return i;
        }
      });
      setItems(newItems);
      console.log("Ítem actualizado:", newItems);
    } else {
      setItems((prev) => {
        const updatedItems = [...prev, item];
        console.log("Ítem agregado:", updatedItems);
        return updatedItems;
      });
    }
  };

  const removeItem = (id) => {
    const filteredItems = items.filter((i) => i.id !== id);
    setItems(filteredItems);
  };

  const getTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <ItemsContext.Provider
      value={{ addItem, items, removeItem, reset, getTotalQuantity }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
