export default function Product({ title, description, rating, price, image }){
  return (
    <div>
      <img src={image}/>
      <h2>{title}</h2>
      <p>${price}</p>
      <p>{rating}</p>
    </div>
  )
}
