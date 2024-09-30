import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  .modal-content {
    background-color: #0B0C0E;
    color: #fff;
    position: fixed;
    width: 50%;
    top: 0;
    bottom: 0;
    right: 0;
  }
`;

export const WrapperImage = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #C7D0D9;
`;

export const Menu = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    font-size: 40px;
    transform: translateY(-50%);
    color: white;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 20px 0 20px 32px;
    border-radius: 95px 0 0 95px;
    width: 117px;
    transition: width 0.3s ease;

    &:hover {
        width: 358px;
    }

    .name-user {
        visibility: hidden;
        transition: visibility 0s 0.3s;
        cursor: pointer;
    }

    &:hover .name-user {
        visibility: visible;
        transition: visibility 0s 0s;
    }
`;

export const ModalContent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 67px;
`;

export const ButtonClose = styled.div`
    position: absolute;
    top: 60px;
    right: 60px;
    cursor: pointer;
`;

export const ModalMenuContent = styled.div`
    height: 372px;
    gap: 28px;
    // height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const SocialSection = styled.div`
    width: 358px;
    display: flex;
    justify-content: space-between;
`;

export const About = styled.div`
    margin-top: 160px;
    margin-bottom: 160px;
    padding-inline: 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const LeftUperContent = styled.div`
    font-size: 40px;
    display: flex;
    justify-content: space-between;
`;

export const RightUperContent = styled.div`
    width: 60%;
    font-size: 27px;
    text-align: lift;
`;

export const RightLowerContent = styled.div`
    font-size: 27px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const RightSubContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BrainDesign = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitelSubContent = styled.p`
    front-size: 60px;
    display: flex;
    justify-content: flex-start;
`;

export const DescSubContent = styled.p`
    font-size: 18px;
    color: #3C3D3E;
    display: flex;
    flex-direction: column;
`;

export const Gap = styled.div`
    margin-top: 32px;
`;

export const Testimoni = styled.div`
    margin-top: 160px;
    margin-bottom: 160px;
    padding-inline: 80px;
    display: flex;
    justify-content: space-between;
`;

export const LeftTestimoni = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 30%;
    font-size: 40px;
    
`;

export const RightTestimoni = styled.div`
    width: 60%;
    font-size: 27px;
`;

export const RightSubTestimoni = styled.div`
    font-size: 27px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;

export const TitelSubTestimoni = styled.p`
    font-size: 27px;
    margin-top: 46px;
    display: flex;
    justify-content: space-between;
 `;

export const GetInTouch = styled.div`
    background-color: #0B0C0E;
    color: #fff;
    padding: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export const UpFooter = styled.div`
    font-size: 60px;
`;

export const DownFooter = styled.div`
    font-size: 60px;
    display: flex;
    > div {
        margin-left: 10px;
    };
`;

export const ButtonGetInTouch = styled.button`
    background-color: #fff;
    padding: 24px 48px;
    border-radius: 170px;
`