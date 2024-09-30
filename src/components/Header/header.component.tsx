import { Link } from 'react-router-dom';
import { NavContainer, NavContainerDiv, NavList, WrapperNavbar } from './header.style';

const Headers = () => {
    return (
        <WrapperNavbar>
            <NavContainer>
                <NavContainerDiv>
                    @Ayush Barnwal
                </NavContainerDiv>
                <NavList>
                    <a href="/">About</a>
                    <a href="#work">Work</a>
                    <Link to="/contact">Contact</Link>
                </NavList>
            </NavContainer>
        </WrapperNavbar>
    );
};

export default Headers;