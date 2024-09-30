import { FooterList, LifeLowerFooter, WrapperFooter } from './footer.style';

const FooterComponent = () => {
    return (
        <WrapperFooter>
            <LifeLowerFooter> Build with <span> 💖 </span> by Brightscout & Ayush </LifeLowerFooter>
            <FooterList>
                <a href="/">Linkedin</a>
                <a href="#work">Twitter</a>
                <a href="/contact-us">Instagram</a>
                <a href="/contac"> Webflow </a>
            </FooterList>

        </WrapperFooter>
    );
};

export default FooterComponent;