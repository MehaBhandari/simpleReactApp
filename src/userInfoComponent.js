import React from "react";

export default function MyUser(props) {
    if(props.user && props.user.length>props.i) {
        if(props.user[props.i].gender === 'Female'){
            return <h1> Hello Miss. {props.user[props.i].name}.</h1>
        }
        else if(props.user[props.i].gender === 'Male'){
            return <h1> Hello Mr. {props.user[props.i].name}.</h1>
        }
    } else {
        return <h1> Hello Stranger.</h1>
    }

}


