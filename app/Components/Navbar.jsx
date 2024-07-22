"use client"

import { useState } from "react";

export default function Navbar({ setResultsF }){
  const [query, setQuery] = useState("");

  const queryResults = async ev => {
    ev.preventDefault();

    const response = await fetch("/api/search?" + queryParser(query));
    const productData = await response.json();

    const queryHistory = JSON.parse(localStorage.getItem("queryHistory") || "[]");
    queryHistory.push(query);
    localStorage.setItem("queryHistory", JSON.stringify(queryHistory));

    setResultsF(productData);
  }

  const queryParser = query => {
    if(!query)
      return "";

    const filterItems = query.split("and");

    const filters = filterItems.map(item => {
      const [key, value] = item.split(/[<>]/g)

      return key.trim().toLowerCase() + (item.includes("<") ? "Max" : "Min") + "=" + value.trim();
    });

    return filters.join("&")
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
