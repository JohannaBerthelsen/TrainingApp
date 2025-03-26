import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    background:rgb(133, 166, 167);
`;

const Logo = styled.h1`    
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
                <li><NavLink to="/">XX</NavLink></li>
            </NavList>
        </Nav>
    );
}
export default Navbar;