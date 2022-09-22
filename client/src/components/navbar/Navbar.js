import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css"
// import DropdownMenu from "./Dropdown.js";

export default function Navbar() {
    const navigate = useNavigate();

    return <nav >
        <div className="nav">
            <div>
                {/* <DropdownMenu /> */}
            </div>
            <div>
                <img className="nav-img" src='https://cdn.freelogodesign.org/files/abc8071a02e54a0a9dba3bf2efdfaeca/thumb/logo_200x200.png?v=0'/>
            </div>
            <div>
                <Link className="home" to='/'>Home</Link>
            </div>
        </div>

    </nav>
}
