import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "../assets/styles/dish.scss";

export default function Dish({ name, image, price }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} fluid />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{price}€</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
