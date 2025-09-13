
import React from "react";
import ReactDOM from "react-dom/client";
let seconddivEl = document.createElement("div")
    let bodyEl = document.getElementById("body");
    const rootEl = document.getElementById('root');
    bodyEl.appendChild(seconddivEl);
    const rootElement = ReactDOM.createRoot(rootEl);
    let secondRootEl = ReactDOM.createRoot(seconddivEl);
    const headingReactEl = React.createElement("strong", {id:"heading"}, "Hello World from React");
    let headingjsx = <h1 className="headingjsx" >Heading created using JSX</h1>;
    
    rootElement.render(headingReactEl);

    secondRootEl.render(headingjsx);


