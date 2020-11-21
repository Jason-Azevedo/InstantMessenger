import React from 'react'
import {Route, Redirect} from 'react-router-dom';

interface SecureRouteData {
    isAuth: Boolean,
    path: string,
    redirectPath: string
    component: React.ComponentClass | React.FunctionComponent,
}

export default function SecureRoute(props: SecureRouteData) {
    return (
        <>
            {props.isAuth 
              ? <Route exact path={props.path} component={props.component}/> 
              : <Redirect to={props.redirectPath} />}
        </>
    )
}
