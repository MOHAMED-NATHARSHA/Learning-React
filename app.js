

    const rootEl = document.getElementById('root');
    const rootElement = ReactDOM.createRoot(rootEl);
    const headingReactEl = React.createElement("p", {id:"heading"}, "Hello World from React");
    rootElement.render(headingReactEl);
