export default function Dish({ name, image, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{price}€</p>
    </div>
  );
}
