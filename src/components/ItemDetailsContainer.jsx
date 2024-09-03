import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemDetails } from "./ItemDetails";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemsContext } from "../contexts/ItemsContext";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addItem } = useContext(ItemsContext);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({
            ...snapshot.data(),
            id: snapshot.id,
          });
        }
      })
      .catch((error) => {
        console.error("Error", error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (quantity) => {
    addItem({ ...item, quantity });
  };

  if (loading) return "Cargando";

  return item ? (
    <ItemDetails item={item} onAdd={onAdd} />
  ) : (
    <div>Item not found</div>
  );
};
