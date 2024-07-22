"use client"

import { useState } from "react";

export default function Navbar(){
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const queryResults = async ev => {
    ev.preventDefault();

    const response = await fetch("/api/search?q=" + query);
    const productData = await response.json();

    setResults(productData);
  }

  return (
    <div>
      <nav>
        <form onSubmit={queryResults}>
          <input type="text" placeholder="search" onChange={ev => setQuery(ev.target.value)}/>
        </form>
      </nav>
      <div>
        {JSON.stringify(results)}
      </div>
    </div>
  )
}
