import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const LogoLink = styled(NavLink)`
    display: flex;
    align-items: center;
`;

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

export default function Navbar(){
    return(
        <Nav>
            <LogoLink to="/">
                <Logo src={logo} /> 
            </LogoLink>
            <NavList>
                <NavItem><StyledNavLink to="/login">Login</StyledNavLink></NavItem>
                <NavItem><StyledNavLink to="/register">Register</StyledNavLink></NavItem>
            </NavList>
        </Nav>
    );
}