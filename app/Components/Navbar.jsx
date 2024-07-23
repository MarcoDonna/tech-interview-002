"use client"

import { useState } from "react";

export default function Navbar({ setResultsF }){
  const [query, setQuery] = useState("");

  const queryResults = async ev => {
    ev.preventDefault();

    const response = await fetch("/api/search?" + queryParser(query));
    const productData = await response.json();

    const queries = JSON.parse(localStorage.getItem('queryHistory')) || [];
    queries.push(query);
    localStorage.setItem('queryHistory', JSON.stringify(queries));

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
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap flex-row items-center justify-center mx-auto p-4">
        <div className="w-6/12">
            <form onSubmit={queryResults} className="max-w-md mx-auto ">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input onChange={ev => setQuery(ev.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
          </div>
        </div>
    </nav>
  )
}
