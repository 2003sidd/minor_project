import { Link } from "react-router-dom";
import './header.css';
const Header = () => {
    return (
        <>
            <header>
                <div className="name">
                    Name of project
                </div>
                <div className="nav">
                    <ul>
                        <li id="nav-item1"><Link to="/">Home</Link></li>
                        <li id="nav-item2"><Link to="/about">About</Link></li>
                        <li id="nav-item3"><Link to="/contact">Contact</Link></li>
                        {/* <li id="nav-item4"></li>
        <li id="nav-item5"></li> */}
                    </ul>
                </div>
                <div>
                    <button id="login"><Link to="/login">Login</Link></button>
                    <button id="signup"><Link to="/signup">Signup</Link></button>
                </div>
            </header><link to=""></link>
        </>
    )
}
export default Header;