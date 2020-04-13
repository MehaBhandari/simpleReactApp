import React from "react";
import ReactDOM from "react-dom";
import MyUser from './userInfoComponent';

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
ReactDOM.render(
    <MyUser i="2" user={user} />,
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