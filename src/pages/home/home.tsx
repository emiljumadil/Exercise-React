import Frame8 from '../../assets/images/Frame 8.svg';
import Image1 from '../../assets/images/images 1.png';
import Image2 from '../../assets/images/images 2.svg';
import Image3 from '../../assets/images/images 3.svg';
import Image4 from '../../assets/images/images 4.svg';
import ImageClose from '../../assets/images/CLOSE.png';
import FooterComponent from '../../components/Footer/footer.component';
import Headers from '../../components/Header/header.component';
import {
    About,
    BrainDesign,
    ButtonClose,
    ButtonGetInTouch,
    Container,
    DescSubContent,
    DownFooter,
    Gap,
    GetInTouch,
    LeftTestimoni,
    LeftUperContent,
    Menu,
    ModalContent,
    ModalMenuContent,
    RightSubContent,
    RightSubTestimoni,
    RightTestimoni,
    RightUperContent,
    SocialSection,
    Testimoni,
    TitelSubContent,
    TitelSubTestimoni,
    UpFooter,
    WrapperImage
} from "./home.style";

function Home() {
    return (
        <Container>
            {/* HEADERS */}
            <Headers />
            <WrapperImage>
                <img src={Image1} alt="images-develop" />
            </WrapperImage>

            <Menu>
                <span>👋</span>
                <span className='name-user' data-bs-toggle="modal" data-bs-target="#exampleModal">Hi I’m Ayush</span>
            </Menu>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ModalContent>
                            <ButtonClose>
                                <img src={ImageClose} width={80} alt="images-develop"  data-bs-toggle="modal" />
                            </ButtonClose>
                            <ModalMenuContent>
                                <h1>Home</h1>
                                <h1>About</h1>
                                <h1>Work</h1>
                                <h1>Contact</h1>
                            </ModalMenuContent>
                            <SocialSection>
                                <div>Linkedin</div>
                                <div>Instagram</div>
                                <div>Twitter</div>
                                <div>Webflow</div>
                            </SocialSection>
                        </ModalContent>
                    </div>
                </div>
            </div>

            {/* <div className="text-display">
                <h1>Webflow Developer - UI/UX Designer</h1>
            </div> */}

            <About>
                <LeftUperContent>
                    <div>
                        About
                    </div>
                    <RightUperContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                    </RightUperContent>
                </LeftUperContent>

                <LeftUperContent>
                    <div>
                        Recent Work
                    </div>
                    <RightUperContent>
                        <RightSubContent>
                            <BrainDesign>
                                <TitelSubContent>Decodable.co</TitelSubContent>
                                <DescSubContent>Brand Design - Webflow Development - Web Design</DescSubContent>
                            </BrainDesign>
                            <img src={Frame8} alt="images-develop" />
                        </RightSubContent>
                        <Gap></Gap>
                        <RightSubContent>
                            <BrainDesign>
                                <TitelSubContent>Gofirefly.oi</TitelSubContent>
                                <DescSubContent>Brand Design - Webflow Development - Web Design</DescSubContent>
                            </BrainDesign>
                            <img src={Frame8} alt="images-develop" />
                        </RightSubContent>
                        <Gap></Gap>
                        <RightSubContent>
                            <BrainDesign>
                                <TitelSubContent>Blinkops.com</TitelSubContent>
                                <DescSubContent>Brand Design - Webflow Development - Web Design</DescSubContent>
                            </BrainDesign>
                            <img src={Frame8} alt="images-develop" />
                        </RightSubContent>
                        <Gap></Gap>
                        <RightSubContent>
                            <BrainDesign>
                                <TitelSubContent>Withkanvas.com</TitelSubContent>
                                <DescSubContent>Brand Design - Webflow Development - Web Design</DescSubContent>
                            </BrainDesign>
                            <img src={Frame8} alt="images-develop" />
                        </RightSubContent>
                        <Gap></Gap>
                    </RightUperContent>
                </LeftUperContent>
            </About>

            {/* <!-- TESTIMONI --> */}

            <Testimoni>
                <LeftTestimoni>Testimonials</LeftTestimoni>
                <RightTestimoni>
                    <RightSubTestimoni>
                        <TitelSubTestimoni>“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</TitelSubTestimoni>
                        <div className="images-testimoni">
                            <img src={Image2} alt="images-testimoni" />
                        </div>
                    </RightSubTestimoni>
                    <RightSubTestimoni>
                        <TitelSubTestimoni>“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</TitelSubTestimoni>
                        <div className="images-testimoni">
                            <img src={Image3} alt="images-testimoni" />
                        </div>
                    </RightSubTestimoni>
                </RightTestimoni>
            </Testimoni>


            <GetInTouch>
                <div>
                    <UpFooter> Have something in mind? </UpFooter>
                    <DownFooter>
                        <img src={Image4} alt="img-footer" />
                        <div>let’s build it together.</div>
                    </DownFooter>
                </div>
                <ButtonGetInTouch>
                    Get In Touch
                </ButtonGetInTouch>

            </GetInTouch>

            {/* FOOTER */}
            <FooterComponent />
        </Container>
    );
};

export default Home;