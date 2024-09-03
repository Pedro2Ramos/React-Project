import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ItemList = ({ items }) => {
  return (
    <Row className="g-4">
      {items.map((i) => (
        <Col key={i.id} xs={12} sm={6} md={4} lg={3}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={i.pictureUrl}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{i.title}</Card.Title>
              <Card.Text>{i.description}</Card.Text>
              <Card.Text>{i.category}</Card.Text>
              <div className="mt-auto">
                <Link to={`/item/${i.id}`}>
                  <Button variant="primary">Ver</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
