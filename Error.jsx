import { useRouteError } from "react-router-dom";

function Error(){
    const err=useRouteError();
    return(
        <>
        <h1>{err.status}</h1>
        
        </>
    )
}

export default Error;