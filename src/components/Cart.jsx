import { useContext, useState } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, removeItem, reset } = useContext(ItemsContext);

  const handleChange = (ev) => {
    setBuyer((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const sendOrder = async (ev) => {
    ev.preventDefault();

    // Validación de campos vacíos
    if (!buyer.name || !buyer.phone || !buyer.email) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    try {
      const docRef = await addDoc(orderCollection, order);
      alert("Su orden ha sido completada!");
      reset();
      setBuyer(initialValues);
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  if (items.length === 0) {
    return (
      <Container>
        <p>No hay productos en el carrito.</p>
        <Link to="/" className="btn btn-primary">
          Volver a la Home
        </Link>
      </Container>
    );
  }

  const isFormIncomplete = !buyer.name || !buyer.phone || !buyer.email;

  return (
    <Container>
      <Button variant="danger" onClick={reset} className="mb-4">
        Vaciar
      </Button>
      {items.map((item) => (
        <div key={item.id} className="mb-4">
          <h4>{item.title}</h4>
          <img src={item.pictureUrl} height={200} alt={item.title} />
          <p>Cantidad: {item.quantity}</p>
          <Button variant="warning" onClick={() => removeItem(item.id)}>
            Eliminar
          </Button>
        </div>
      ))}
      <div className="mb-4">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <Form onSubmit={sendOrder}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            value={buyer.name}
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su teléfono"
            value={buyer.phone}
            name="phone"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            value={buyer.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isFormIncomplete}>
          Comprar
        </Button>
      </Form>
    </Container>
  );
};
