import { LOGO_URL } from "../utils/constants";  

const Titlecomponent = ()=>(
    <div className="logo-title-container">
        <div className="logo-container">
            <a href="/" className="text-decoration-none">
                <img src={LOGO_URL} alt="logo" className="logo-img"/>
            </a>
        </div>
        <div className="title-container">
            <h1 className="title">Break Time</h1>
        </div>
    </div>

    
);
export default Titlecomponent;