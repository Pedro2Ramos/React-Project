import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const ref = collection(db, "items");

    const q = id ? query(ref, where("category", "==", id)) : ref;

    getDocs(q)
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "Cargando";

  return (
    <Container className="mt-4">
      <ItemList items={items} />
    </Container>
  );
};
