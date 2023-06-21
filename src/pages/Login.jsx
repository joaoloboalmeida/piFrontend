import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Ichat </span>
                <span className="title">Register</span>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Sign up</button>
                </form>
                <p>Não possui uma conta? Registrar</p>
            </div>
        </div>
    )
}

export default Login;