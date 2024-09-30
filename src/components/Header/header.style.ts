import styled from "styled-components";

export const WrapperNavbar = styled.div`
    width: 100%;
    background-color: #C7D0D9;
`;

export const NavContainer = styled.nav`
    // width: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 26px 80px;
`;

export const NavContainerDiv = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
`;

export const NavList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 230px;
    // gap: 40px;
    > a {
        text-decoration: none;
        color: #000000;
    }
`;