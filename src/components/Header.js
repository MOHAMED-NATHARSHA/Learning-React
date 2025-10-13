import Titlecomponent from "./Title";
import LoginComponent from "./Login";
import { Link } from "react-router-dom";

const Headercomponent = () => (

    <div className="header-component-container">
        <Titlecomponent />
        <div className="menu-list-cart-container">
        <div className="menu-container">
            <ul className="menu-list">
                <li className="menu-list-item"><Link to="/" >Home</Link></li>
                <li className="menu-list-item"><Link to="/about">About</Link></li>
                <li className="menu-list-item"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="Cart-container">
            <i className="bi bi-cart4 cart-icon"></i>
            <span className="cart-count">0</span>
        </div>
        <LoginComponent />
        </div>
    </div>

);
export default Headercomponent;