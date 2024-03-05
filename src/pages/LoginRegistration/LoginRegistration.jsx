import Layout from "../../components/Layout/Layout";
import "../../components/UseAssets/rootClass.css";
import Registration from "./Registration";
import Login from "./Login";
import "./LoginRegistration.css";
import { createContext, useState } from "react";
export const formContext = createContext();
const LoginRegistration = () => {
    const [loginForm, setLoginForm] = useState(true);
    const formContextData = {
        loginContext: [loginForm, setLoginForm],
    };
    return (
        <Layout >
            <div className="flex-div main-login-registration">
                <formContext.Provider value={formContextData}>
                    {
                        loginForm ? <Login /> : <Registration />
                    }
                </formContext.Provider>
            </div>

        </Layout>
    )
}
export default LoginRegistration;