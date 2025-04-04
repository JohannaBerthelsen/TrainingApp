import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 15px;
    background:#8FBC8F;
`;

const Logo = styled.img` 
    height: 50px;
    width: auto;
`;

const NavList = styled.ul`
    display: flex;
    flex: 1;
    justify-content: space-around;
    gap: 20px;
`;

const NavItem = styled.li`
    list-style: none;
`


const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: black;
font-size: 18px;
`;

function Navbar(){
    return(
        <Nav>
            <Logo src={logo} /> 
            <NavList>
                <NavItem><StyledNavLink to="/">Login</StyledNavLink></NavItem>
                <NavItem><StyledNavLink to="/">Register</StyledNavLink></NavItem>
            </NavList>
        </Nav>
    );
}
export default Navbar;