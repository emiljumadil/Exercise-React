import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid yellowgreen;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
`;

export const WrapperSection = styled.div`
    display: flex;
    margin-top: 80px;
    padding-inline: 80px;
`;

export const LeftSection = styled.div`
    width: 50%;
`;

export const ContactDetails = styled.div`
    color: #3C3D3E
    margin-top: 56px;
    margin-bottom: 40px;
`;

export const SocialSection = styled.div`
    color: #3C3D3E
`;

export const RightSection = styled.div`
    width: 50%;
    .input-group > .form-control {
        border: none;
        border-bottom: 1px solid;
        border-radius: 0;
        padding-inline: 0;
    }
`;

export const ButtonSubmit = styled.button`
    background-color: #000;
    color: #fff;
    margin-top: 32px;
    padding-inline: 68px;
    margin-bottom: 100px;
    border-radius: 170px;
`