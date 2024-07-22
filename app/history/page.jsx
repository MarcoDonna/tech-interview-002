"use client"

export default function History(){
  const clearHistory = () => {
    localStorage.setItem("queryHistory", "[]")
    location.reload();
  }

  const queryHistory = JSON.parse(localStorage.getItem("queryHistory"))

  return (
    <div>
      <button onClick={clearHistory}>Delete history</button>
      {
        queryHistory.map(item => <p>{item}</p>)
      }
    </div>
  )
}
