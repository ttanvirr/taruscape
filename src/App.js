import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="container">
      <h1>Taruscape Ltd.</h1>
      <h2>Something cool is coming soon...</h2>
      <button onClick={handleClick}>Click me to increment the number</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App
