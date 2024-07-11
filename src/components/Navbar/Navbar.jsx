import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Navbar.styled";

function Navbar() {
    return (
        <StyledHeader>
            <nav>
                <div><img src="/assets/logo.png" alt="logo" /></div>
            
                <div>
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active">Global</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Indonesia" activeClassName="active">Indonesia</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Provinsi" activeClassName="active">Provinsi</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" activeClassName="active">About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </StyledHeader>
    );
}

export default Navbar;