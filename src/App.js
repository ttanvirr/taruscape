import { useState, useEffect } from 'react'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])
  const handleClick = () => {
    setCount(count + 1)
  }
  if (isLoading) {
    return <h1>Loading...</h1>
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
