import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSumar,counterRestar,counterSumarNumero,counterReset } from '../redux/actions/counterActions'


const Counter = () => {
    const counter = useSelector(state => state.counter)
    const [number,setNumber] = useState(0)
    const dispatch = useDispatch()

    const handleChange = (e) => setNumber(e.target.value)

  return (
    <div>
      <h1>Counter: {counter.counter}</h1>
      <input type="number" onChange={handleChange}/>
      <button onClick={()=> dispatch(counterSumarNumero(Number(number)))}>Sumar {number}</button>
      <button onClick={()=> dispatch(counterSumar())}>Sumar</button>
      <button onClick={()=> dispatch(counterRestar())}>Restar</button>
      <button onClick={()=> dispatch(counterSumarNumero(5))}>Sumar +5</button>
      <button onClick={()=> dispatch(counterReset())}>Reset</button>
    </div>
  )
}

export default Counter