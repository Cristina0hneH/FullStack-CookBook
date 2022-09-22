import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css"
import DropdownMenu from "./Dropdown.js";

export default function Navbar({ recipes, setRecipes }) {
    const navigate = useNavigate();

    return <nav >
        <div className="nav">
            <div>
                <DropdownMenu recipes={recipes} setRecipes={setRecipes} />
            </div>
            <div>
            </div>
            <div>
                <Link className="home" to='/'>Home</Link>
            </div>
        </div>

    </nav>
}
