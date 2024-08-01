import React from 'react'
import {Route,Redirect} from 'react-router-dom'

var token = localStorage.getItem('loginID')

export function ProtectedRouteStudent({ component:Component ,...rest}) {
    var auth = false;
    if (token) {
        console.log(token);
        if(token.length===15){
            auth=true
        }else {
            auth=false
        }
    } 
    else{
        auth=false
    }

    return (
            <Route {...rest} render = {(props) => {
                console.log('auth is '+auth);
                if (auth) {
                    return <Component {...props} />
                } else {
                    return <Redirect to ={{pathname:'/',state : props.location}} />
                }
            }}
            />
        )

}

export function ProtectedRouteAdmin({ component:Component ,...rest}) {
    var auth = false;
        if (token) {
            if(token[0]==='A'){
                auth=true
            }else {
                auth=false
            }
        } 
        else{
            auth=false
        }
    
    return (
            <Route {...rest} render = {(props) => {
                if (auth) {
                    return <Component {...props} />
                } else {
                    return <Redirect to ={{pathname:'/',state : props.location}} />
                }
            }}
            />
        )
    }