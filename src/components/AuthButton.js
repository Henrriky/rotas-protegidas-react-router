import React from 'react'
import { loginAction, logoutAction } from '../actions/loginActions'
import { useSelector, useDispatch } from 'react-redux'

function AuthButton(props) {
    const login = useSelector(state => state)
    const dispatch = useDispatch();

    return (
        login ? 
        <button onClick={() => { dispatch(logoutAction()) }}>Logout</button>
        :
        <button onClick={() => { dispatch(loginAction()) }}>Login</button>
  )
}

export default AuthButton