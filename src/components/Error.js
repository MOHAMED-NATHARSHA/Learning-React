import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <h2>{error.status}:{error.statusText}</h2>
            <p>We're sorry, but an unexpected error has occurred.</p>
        </div>
    );
};
export default Error;