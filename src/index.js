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
];

function App() {
    return(
        <div>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    )
};

function Header() {
    return(
        <div>
            <MyUser i="1" user={user}></MyUser> <br /> <br />
        </div>
    )
};

function Body() {
    return(
      <div>
          <h5>This is the body of the react dummy App</h5> <br /> <br /><br /> <br />
      </div>
    )
};

function Footer() {
    return (
        <div>
            <hr/>
            <p>This is the footer with all @Copyrights reserved.</p>
        </div>
    )
};

ReactDOM.render(
    <App/>,
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