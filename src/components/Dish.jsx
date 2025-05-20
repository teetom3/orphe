import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "../assets/styles/dish.scss";
import Badge from "react-bootstrap/Badge";
import { Button } from "react-bootstrap";

export default function Dish({ name, image, price, isNew, stock, addToCart }) {
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
      <Button variant="primary" onClick={addToCart}>
        Ajouter au panier
      </Button>
    </Card>
  );
}
