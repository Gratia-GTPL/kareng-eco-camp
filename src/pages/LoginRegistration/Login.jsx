import { NavLink } from "react-router-dom";
import "./Login.css";
import { formContext } from "./LoginRegistration";
import { useContext, useEffect } from "react";
const Login = () => {
    const { loginContext } = useContext(formContext);
    const [loginForm, setLoginForm] = loginContext;
    const SignUpFormm = () => {
        setLoginForm(!loginForm);
    }
    return (
        <>
            <div className={`flex-div main-login `}>
                <div className="flex-div main-login-form">
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, rem.</p>
                    <div className="flex-div login-form">
                        <p>Email</p>
                        <input type="text" />
                    </div>
                    <div className="flex-div login-form">
                        <p>Password</p>
                        <input type="password" />
                    </div>
                    <div className="flex-div forgot-pass-div">
                        <NavLink className="login-link" to="/forgot-password">
                            Forgot password ?
                        </NavLink>
                    </div>
                    <div className="login-btn-div">
                        <button>Login</button>
                    </div>
                    <div className="flex-div login-div">
                        <p>Don't have an account?</p>
                        <button onClick={SignUpFormm}>Sign up now</button>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Login;