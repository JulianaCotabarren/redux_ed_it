import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const counter = useSelector(state => state.counter)
  return (
    <div>Counter: {counter.counter}</div>
  )
}

export default Counter