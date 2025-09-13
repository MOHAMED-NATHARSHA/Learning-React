
import React from "react";
import ReactDOM from "react-dom/client";

    const rootEl = document.getElementById('root');
    const rootElement = ReactDOM.createRoot(rootEl);
    const headingReactEl = React.createElement("strong", {id:"heading"}, "Hello World from React");
    rootElement.render(headingReactEl);


    
