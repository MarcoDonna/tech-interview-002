import Product from '@/app/Components/Product';
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from 'next/server';

type QueryParameters = {
  query: string,
  priceMin: number,
  priceMax: number,
  ratingMin: number,
  ratingMax: number,
}

type Product = {
  id: number,
  title: string,
  rating: number,
  price: number,
  thumbnail: string,
  category: string
}

async function getProductData({ query, priceMin, priceMax, ratingMin, ratingMax } : QueryParameters){
  const response = await fetch("https://dummyjson.com/products/search?q=" + query);
  const productsData = await response.json();

  // Filter products within the given price range and rating.
  return productsData.products.filter((product: Product) => {
    return (
      product.price >= priceMin
      && product.price <= priceMax
      && product.rating >= ratingMin
      && product.rating <= ratingMax
    );
  });
}

export async function GET(req : NextApiRequest, res : NextApiResponse){
  if (!req.url) {
    return res.status(400).json({ error: 'Bad Request' });
  }

  const { searchParams } = new URL(req.url);

  // Select all products if no search term (q) is passed in the query.
  const query = searchParams.get("q") || "";
  const priceMin = parseFloat(searchParams.get("priceMin") || "0");
  const priceMax = parseFloat(searchParams.get("priceMax") || `${Number.MAX_VALUE}`);
  const ratingMin = parseFloat(searchParams.get("ratingMin") || "0");
  const ratingMax = parseFloat(searchParams.get("ratingMax") || `${Number.MAX_VALUE}`);

  const productData = await getProductData({ query, priceMin, priceMax, ratingMin, ratingMax });

  return NextResponse.json(productData);
}
