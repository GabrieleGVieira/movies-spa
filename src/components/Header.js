import { Link } from "react-router-dom";

export function Header() {
    return (<>
    <h1> Movies SPA </h1>
    <ul> 
        <li><Link to={"/"} > Home </Link></li>
        <li><Link to={"/movies"} > Movies </Link></li>
    </ul>
    </>
)}