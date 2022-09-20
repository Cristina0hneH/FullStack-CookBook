import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css" 

export default function Navbar() {
    const navigate = useNavigate();


    return <nav className="nav">
        <div>
        <div>
        <p></p>
        </div>
        <div>
        {/*<img src='https://img.freepik.com/premium-vector/cookbook-logo-icon-symbol-with-recipe-book-with-cook-simple-negative-space-style-logo_279597-883.jpg'/>*/}
        </div>
        <div>
        <Link to='/'>Home</Link>
        </div>
        </div>
        
         </nav>
}
