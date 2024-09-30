import Footer from "../../components/Footer";
import Headers from "../../components/Header/header.component";
import Image4 from '../../assets/images/images 4.svg';
import { ButtonSubmit, ContactDetails, Container, LeftSection, RightSection, SocialSection, WrapperSection } from "./contact.style";

const Contact = () => {
    return (
        <Container>
            <Headers />
            <WrapperSection>
                <LeftSection>
                    <img src={Image4} width={297} alt="img-footer" />
                    <ContactDetails>
                        <div>Contact Details</div>
                        <div>emiljumadil@gmail.com</div>
                        <div>+91 8651447521</div>
                    </ContactDetails>
                    <SocialSection>
                        <div>Social</div>
                        <div>Linkedin</div>
                        <div>Instagram</div>
                        <div>Twitter</div>
                        <div>Webflow</div>
                        <div>Figma</div>
                    </SocialSection>
                </LeftSection>
                <RightSection>
                    <h1>Let’s build something cool together</h1>

                    <div>Name</div>
                    <div className="input-group flex-nowrap mb-4">
                        <input type="text" className="form-control" placeholder="Emil Jumadil" aria-describedby="addon-wrapping"></input>
                    </div>

                    <div>Email</div>
                    <div className="input-group flex-nowrap mb-4">
                        <input type="text" className="form-control" placeholder="emiljumadil@gmail.com" aria-describedby="addon-wrapping"></input>
                    </div>
                    <div>Subject</div>
                    <div className="input-group flex-nowrap mb-4">
                        <input type="text" className="form-control" placeholder="For web design work Enquire" aria-describedby="addon-wrapping"></input>
                    </div>
                    <div>Message</div>
                    <div className="input-group flex-nowrap">
                        <textarea className="form-control" placeholder="Type your Message" aria-describedby="addon-wrapping"></textarea>
                    </div>
                    <ButtonSubmit>
                        Submit
                    </ButtonSubmit>
                </RightSection>
            </WrapperSection>
            <Footer />
        </Container>
    );
};

export default Contact;