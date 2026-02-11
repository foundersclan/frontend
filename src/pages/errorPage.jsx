import { useRouteError } from "react-router-dom"
import { NavLink as Navlink } from "react-router-dom";
export const Errorpage = ()=>{
    const error = useRouteError();
    console.log(error);
    
    return (
        <div>
        <h1>OOPs! An Error Occured</h1>
        {error && <p>{error.data}</p>}
        <Navlink to = "/">
        <button>GO back Home</button>
        </Navlink>
    </div>
    )
}