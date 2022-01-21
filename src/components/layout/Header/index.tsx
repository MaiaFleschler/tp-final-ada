import { Link } from "react-router-dom"

const Header = () => {

    return(
        <nav>
            CINEMADA<br />
            <Link to='/'>Home</Link><br />
            <Link to='/'>Movies</Link><br />
            <Link to='/'>Series</Link><br />
            <Link to='/'>Users</Link><br />
            <Link to='/'>Admin</Link><br />
            <Link to='/'>Log out</Link><br />    
        </nav>
    )
}

export { Header }