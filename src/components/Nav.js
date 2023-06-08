import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
    return (
        <nav className="nav-bar">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/episodes">Episodes</Link>
            <Link className="nav-item" to="/characters">Characters</Link>
        </nav>
    );
}
  
export default Nav;