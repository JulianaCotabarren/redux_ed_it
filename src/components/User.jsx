import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userChangeName, userChangePassword, userChangeUserName, userReset } from '../redux/actions/userActions'


const User = () => {
    const {name,userName,password} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleChangeName = (e) => dispatch(userChangeName(e.target.value))
    const handleChangeUserName = (e) => dispatch(userChangeUserName(e.target.value))
    const handleChangePassword = (e) => dispatch(userChangePassword(e.target.value))
  return (
    <div>
        <input type="text" placeholder='Name' onChange={handleChangeName}/>
        <input type="text" placeholder='User Name' onChange={handleChangeUserName}/>
        <input type="text" placeholder='Password' onChange={handleChangePassword}/>
        <h2>Name: {name}</h2>
        <h2>User name: {userName}</h2>
        <h2>Password: {password}</h2>
        <button onClick={()=>dispatch(userReset())}>Reset</button>
    </div>
  )
}

export default User