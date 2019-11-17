import React from 'react';


function LoginScreen(props) {

    return (
        <div className="Login">
            <h3>Login to continue</h3>
            <form></form> 
                <input className="userName" type="email" placeholder="Enter username or e-mail" name="email" size="25" /><br></br>
                <input className="passWord" type="password" placeholder="Enter password" name="pswd" size="25"/><br></br>
                    <label>
                    <input className ="checkbox" type="checkbox" name="remember" /> Remember me
                    </label><br></br>
                <button onClick={() => {props.setLogin(!props.initLogin); props.renderMain(!props.initMain)}} className="subButton" type="submit">Sign in</button><br></br>
                <p>Or</p><br></br>
                <button>Create new account</button>
                <img alt="" className = "facebookLogin" src="./img/contFacebook.png" width="250px"/><br></br>
                <img alt="" className = "googleLogin" src="./img/contGoogle.png" width="250px"/>
        </div>
    )
}
export default LoginScreen