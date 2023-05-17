import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSumar,counterRestar,counterSumarNumero,counterReset,counterSetTemporal } from '../redux/actions/counterActions'


const Counter = () => {
    const {counter,temporal} = useSelector(state => state.counter)
    //const [number,setNumber] = useState(0)
    const dispatch = useDispatch()

    //const handleChange = (e) => setNumber(e.target.value)

    const handleChange = (e) => dispatch(counterSetTemporal(Number(e.target.value)))

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <input type="number" onChange={handleChange}/>
      <button onClick={()=> dispatch(counterSumarNumero(Number(temporal)))}>Sumar {temporal}</button>
      <button onClick={()=> dispatch(counterSumar())}>Sumar</button>
      <button onClick={()=> dispatch(counterRestar())}>Restar</button>
      <button onClick={()=> dispatch(counterSumarNumero(5))}>Sumar +5</button>
      <button onClick={()=> dispatch(counterReset())}>Reset</button>
    </div>
  )
}

export default Counter