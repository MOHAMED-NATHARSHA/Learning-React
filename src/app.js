
import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Headercomponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";








const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);



const Applayout = () => (
    <div className="app-layout-container">
        <Headercomponent />
        <Outlet />
        <FooterComponent />

    </div>
)

const appRouter = createBrowserRouter([

    {
        path:"/",
        element:<Applayout />,
        children:[
    {
        path:"/",
        element:<BodyComponent />
    },
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
    }

        ],
        errorElement:<Error/>
    }
    
])



root.render(<RouterProvider router={appRouter} />);
