
import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Headercomponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);


const Applayout = () => (
    <div className="app-layout-container">
        <Headercomponent />
        <BodyComponent />
       {/* <FooterComponent /> */}
       
       
    </div>  
)

root.render(<Applayout />);
