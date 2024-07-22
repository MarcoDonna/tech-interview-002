import { NextResponse } from 'next/server';

async function getProductData({ query, priceMin, priceMax }){
  const response = await fetch("https://dummyjson.com/products/search?q=" + query);
  const productsData = await response.json();

  // Filter products within the given price range.
  return productsData.products.filter(product => {
    return product.price >= priceMin && product.price <= priceMax;
  });
}

export async function GET(req){
  const { searchParams } = new URL(req.url);

  // Select all products if no search term (q) is passed in the query.
  const query = searchParams.get("q") || "";
  const priceMin = parseFloat(searchParams.get("priceMin")) || 0;
  const priceMax = parseFloat(searchParams.get("priceMax")) || Number.MAX_VALUE;

  const productData = await getProductData({ query, priceMin, priceMax });

  return NextResponse.json(productData);
}
