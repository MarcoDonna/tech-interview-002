import Product from "./Product"

export default function ProductGrid({ products }){
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
      {
        products.map(product => <Product
          key={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.thumbnail}
          category={product.category}
        />)
      }
    </div>
  )
}
