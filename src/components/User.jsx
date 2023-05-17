import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
    const user = useSelector(state => state.user)
  return (
    <div>
        <h2>Name: {user.name}</h2>
        <h2>User name: {user.userName}</h2>
        <h2>Password: {user.password}</h2>
    </div>
  )
}

export default User