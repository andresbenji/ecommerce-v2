import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = () => {
  //checks if user is logged in from the auth state
    const {userInfo} = useSelector(state => state.auth)
  
  
    return userInfo ? <Outlet /> : <Navigate to='/login' replace/>
}

export default PrivateRoute
