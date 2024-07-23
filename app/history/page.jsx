'use client';

import { useEffect, useState } from 'react';

export default function History() {
  const [queryHistory, setQueryHistory] = useState([]);

  useEffect(() => {
    const queries = JSON.parse(localStorage.getItem('queryHistory')) || [];
    setQueryHistory(queries);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('queryHistory');
    setQueryHistory([]);
  };

  return (
    <div>
      <div>
        <h1>Search History</h1>
        <button onClick={clearHistory}>Clear History</button>
      </div>
      <ul>
        {queryHistory.map((query, index) => (
          <li key={index}>{query}</li>
        ))}
      </ul>
    </div>
  );
}
