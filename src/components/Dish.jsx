import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "../assets/styles/dish.scss";
import Badge from "react-bootstrap/Badge";

export default function Dish({ name, image, price, isNew }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} fluid />
      <Card.Body>
        {isNew && (
          <h4>
            <Badge bg="primary">Nouveau</Badge>
          </h4>
        )}

        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{price}€</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
