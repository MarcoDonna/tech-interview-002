import Product from "./Product"

export default function ProductGrid({ products }){
  return (
    <div>
      {
        products.map(product => <Product
          key={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.thumbnail}
        />)
      }
    </div>
  )
}
