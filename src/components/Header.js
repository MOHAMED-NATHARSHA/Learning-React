import Titlecomponent from "./Title";

const Headercomponent = () => (

    <div className="header-component-container">
        <Titlecomponent />
        <div className="menu-list-cart-container">
        <div className="menu-container">
            <ul className="menu-list">
                <li className="menu-list-item"><a href="/" >Home</a></li>
                <li className="menu-list-item"><a href="/about">About</a></li>
                <li className="menu-list-item"><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div className="Cart-container">
            <i className="bi bi-cart4 cart-icon"></i>
            <span className="cart-count">0</span>
        </div>
        </div>
    </div>

);
export default Headercomponent;