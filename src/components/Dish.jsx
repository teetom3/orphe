export default function Dish({ name, image, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="image d'un plat mexicain" />
      <p>{price}</p>
    </div>
  );
}
