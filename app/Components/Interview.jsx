"use client"

import Navbar from "./Navbar"
import ProductGrid from "./ProductGrid";

import { useState } from "react"

export default function Interview(){
  const [results, setResults] = useState([]);

  return (
    <div>
      <Navbar setResultsF={setResults}/>
      <ProductGrid products={results}/>
    </div>
  )
}
