"use client"

import { useState } from "react";

export default function Navbar({ setResultsF }){
  const [query, setQuery] = useState("");

  const queryResults = async ev => {
    ev.preventDefault();

    const response = await fetch("/api/search?q=" + query);
    const productData = await response.json();

    setResultsF(productData);
  }

  return (
    <div>
      <nav>
        <form onSubmit={queryResults}>
          <input type="text" placeholder="search" onChange={ev => setQuery(ev.target.value)}/>
        </form>
      </nav>
    </div>
  )
}
