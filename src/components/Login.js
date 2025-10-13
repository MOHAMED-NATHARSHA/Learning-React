
import { useState } from "react";


const LoginComponent = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    return (
        <div className="login-component-container">
           <button className="login-btn d-flex flex-column align-items-center" onClick={()=>{
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
           }}>
             <i className="bi bi-person-circle" ></i>
             <span className="login-text">{loginBtn}</span>
           </button>
        </div>
    );
}
export default LoginComponent;