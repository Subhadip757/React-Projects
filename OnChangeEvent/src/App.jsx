import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState()
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('visa');
  const [shipping, setShipping] = useState('Delivery');

  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }
  function handleCommentChange(event){
    setComment(event.target.value);
  }

  function handlePaymentChange(event){
    setPayment(event.target.value);
  }
  function handleShippingChange(event){
    setShipping(event.target.value);
  }

  return (
  <>
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="numer" />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>

      <label htmlFor="">Pick up <input type="radio" value={'Pick Up'} checked={shipping === 'Pick Up'} onChange={handleShippingChange} /></label>

      <label htmlFor="">Delivery <input type="radio" value={'Delivery'} checked={shipping === 'Delivery'} onChange={handleShippingChange} /></label>
      <p>Shipping: {shipping}</p>
    </div>
  </>
  )
}

export default App
