import { useState } from 'react'

function App() {
  const [car, setcar] = useState({
    year:2024, 
    make:"Ford", 
    model:"Mustang"
  })

  function handleYearChange(event){
    const value = event.target.valuu
    e;
    setcar(c =>({...c, year:value}))
  }
  function handleMakeChange(event){
    const value = event.target.value
    setcar(c =>({...c, make:value}))
  }
  function handleModelChange(event){
    const value = event.target.value
    setcar(c =>({...c, model:value}))
  }
  return (
    <>
      <div>
        <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange} /><br />
        <input type="text" value={car.make} onChange={handleMakeChange} /><br />
        <input type="text" value={car.model} onChange={handleModelChange} /><br />
      </div>
    </>
  )
}

export default App
