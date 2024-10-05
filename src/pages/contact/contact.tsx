import { Field, Form, Formik } from 'formik';
import Image4 from '../../assets/images/images 4.svg';
import Footer from "../../components/Footer";
import Headers from "../../components/Header/header.component";
import axios from "axios";
import { useCallback } from "react";
import { ButtonSubmit, ContactDetails, Container, LeftSection, RightSection, SocialSection, WrapperSection } from "./contact.style";
import { useNavigate } from "react-router-dom";

interface DataProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const navigate = useNavigate();

    const handleSubmitted = useCallback(async (data: DataProps, FormikHelpers: ({
        resetForm: any; name: '', email: '', subject: '', message: ''
    })) => {
        console.log('data', data)
        const { status } = await axios.post("http://localhost:3000/dataUser", data);
        console.log('status', status)

        FormikHelpers.resetForm();

        return navigate("/table-view")
    }, [])

    const validate = (value: string) => {
        let errorMessage;
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errorMessage = 'Invalid email address';
        }
        return errorMessage;
    };

    return (
        <Container>
            <Headers />
            <WrapperSection>
                <LeftSection>
                    <img src={Image4} width={297} alt="img-footer" />
                    <ContactDetails>
                        <div>Contact Details</div>
                        <div>ayush.barnwal@brightscout.com</div>
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

                    <Formik
                        initialValues={{ name: '', email: '', subject: '', message: '' }}
                        onSubmit={handleSubmitted}
                    >
                        {({
                            errors,
                            touched,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <div>Name</div>
                                <div className="input-group flex-nowrap mb-4">
                                    <Field
                                        type='text'
                                        name="name"
                                        className="form-control"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>Email</div>
                                <div className="input-group flex-nowrap mb-4">
                                    <Field
                                        type='email'
                                        name="email"
                                        validate={validate}
                                        className="form-control"
                                        placeholder="name@example.com"
                                        aria-describedby="addon-wrapping" />
                                </div>

                                {errors.email && touched.email ? (
                                    <div style={{ color: "red" }}>{errors.email}</div>
                                ) : null}

                                <div>Subject</div>
                                <div className="input-group flex-nowrap mb-4">
                                    <Field
                                        type='text'
                                        name="subject"
                                        className="form-control"
                                        placeholder="For web design work Enquire"
                                        aria-describedby="addon-wrapping" />
                                </div>

                                <div>Message</div>
                                <div className="input-group flex-nowrap mb-4">
                                    <Field
                                        type='text'
                                        name="message"
                                        className="form-control"
                                        placeholder="Type your Message"
                                        aria-describedby="addon-wrapping" />
                                </div>
                                <ButtonSubmit type="submit" disabled={isSubmitting} className="btn btn-primary mb-3">Submit</ButtonSubmit>
                            </Form>
                        )}
                    </Formik>
                </RightSection>
            </WrapperSection>
            <Footer />
        </Container>
    );
};

export default Contact;