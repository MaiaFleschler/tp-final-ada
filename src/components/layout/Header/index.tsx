import { Link } from "react-router-dom"
import { useAuth } from "../../../hooks";

const Header = () => {

    const { logOut } = useAuth();
    
    return(
        <nav>
            CINEMADA<br />
            <Link to='/'>Home</Link><br />
            <Link to='/'>Movies</Link><br />
            <Link to='/'>Series</Link><br />
            <Link to='/'>Users</Link><br />
            <Link to='admin'>Admin</Link><br />
            <button onClick={logOut}>Log out</button><br />    
        </nav>
    )
}

export { Header }