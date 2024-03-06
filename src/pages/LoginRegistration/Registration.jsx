
import "./Login.css";
import { useContext } from "react";
import { formContext } from "./LoginRegistration";
const Registration = () => {
    const { loginContext } = useContext(formContext);
    const [loginForm, setLoginForm] = loginContext;
    const SignInFormm = () => {
        setLoginForm(!loginForm);
    }
    return (
        <div className="flex-div main-login">
            <div className="flex-div main-login-form">
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, rem.</p>
                <div className="flex-div login-form">
                    <p>User name</p>
                    <input type="text" />
                </div>
                <div className="flex-div login-form">
                    <p>Password</p>
                    <input type="password" />
                </div>
                <div className="flex-div login-form">
                    <p>Phone no</p>
                    <input type="number" />
                </div>
                <div className="flex-div login-btn-div" style={{ marginTop: '25px' }}>
                    <button>Sign Up</button>
                </div>
                <div className="flex-div login-div">
                    <p>Already have an account?</p>
                    <button onClick={SignInFormm}>Sign in now</button>
                </div>
            </div>
        </div>
    )
}
export default Registration;