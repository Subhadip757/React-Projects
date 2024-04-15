import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [err, setErr] = useState('');

  const increase = () => {
    setCount(count + 1)
    setErr('')
  }

  const reset = () => {
    setCount(0)
    setErr('')
  }

  const decrease = () => {
    setCount(count - 1)
  }
  if(count < 0){
    setCount(0)
    setErr('Value cant be less than 0')
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrease}>decrease</button>
      <p>{err}</p>
    </>
  )
}

export default App
