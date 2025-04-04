import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    background:#8FBC8F;
`;

const Logo = styled.h1` 
color: white;
`;

const NavList = styled.ul`
`;

const StyledNavLink = styled(NavLink)`
`;

function Navbar(){
    return(
        <Nav>
            <Logo>Logo</Logo>
            <NavList>
                <li><StyledNavLink to="/">XX</StyledNavLink></li>
            </NavList>
        </Nav>
    );
}
export default Navbar;