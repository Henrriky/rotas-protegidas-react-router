import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({children, ...rest}) {

    const login = useSelector(state => state);
    
    return (
    <Route 
        {...rest}
        render = {({location}) => login ? (children) : 
            (<Redirect to={{
                pathname: "/negado",
                state: { from: location}
            }}></Redirect>
            )}
    >

    </Route>
    )
}

export default PrivateRoute