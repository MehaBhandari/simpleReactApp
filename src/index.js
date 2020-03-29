import React from "react";
import ReactDOM from "react-dom";

 const user = [
     {name: 'Meha Bhandari',
     gender: 'Female'},
     {name: 'Mayank Bhandari',
     gender: 'Male'},
     {name: 'Mayank Gupta',
     gender: 'Male'},
     {name: 'Abhishek Mishra',
     gender: 'Male'}
 ]
 function myUser(user, i) {
     if(user && user.length>i) {
            {if(user[i].gender === 'Female'){
                return <h1> Hello Miss. {user[i].name}.</h1>
            }
            else if(user[i].gender === 'Male'){
                return <h1> Hello Mr. {user[i].name}.</h1>
            }}
     } else {
         return <h1> Hello Stranger.</h1>
     }

 }
ReactDOM.render(
    myUser(user,2),
    document.getElementById('root')
);
// ReactDOM.render(
//     myUser(user),
//     document.getElementById('root')
// );
// ReactDOM.render(
//     myUser(user,10),
//     document.getElementById('root')
// );
// ReactDOM.render(
//     myUser(1),
//     document.getElementById('root')
// );
// ReactDOM.render(
//     myUser(11),
//     document.getElementById('root')
// );