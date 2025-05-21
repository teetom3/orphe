import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "../assets/styles/dish.scss";
import Badge from "react-bootstrap/Badge";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Dish({ name, image, price, isNew, stock }) {
  const { dispatch } = useContext(CartContext);
  return (
    <Card>
      <Card.Img variant="top" src={image} fluid />
      <Card.Body>
        {isNew && <Badge bg="primary">Nouveau</Badge>}

        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{price}€</p>
        </Card.Text>
      </Card.Body>
      <Button variant="primary" onClick={() => dispatch({ type: "increment" })}>
        Ajouter au panier
      </Button>
      <Button variant="danger" onClick={() => dispatch({ type: "decrement" })}>
        Retirer du Panier
      </Button>
    </Card>
  );
}
