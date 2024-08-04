import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import Image from "next/image";
import { Formik } from 'formik';

import {
    ContactForm,
    ContactInput,
    ContactButton,
    ContactMessage,
    ContactSubject,
    ErrorMessage,
    ContactInputBlock
} from "@/styled-components/contact.styled";
import ContactImg from '../../assets/images/contact.svg';
import { useMediaQuery } from '@mui/material';
import '../../sass/_general.scss';
import '../../styled-components/contact.styled';
import { ResponsivenessContext } from '@/contexts/breakpoint-context';

export const ContactView = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const { styles } = useContext(ResponsivenessContext);
    return (
        <div className={"contact-container"} style={styles?.generalContainer} id='Contact'>
            <h2 className={'header-title'}>Drop Me a Line<span>.</span></h2>
            <div className="contact-form-container" style={styles?.generalContainer}>
                <div className={'contact-description'}>
                    <h2>Get In Touch!</h2>
                    <p>Filling this form is boring? Then send me an <a href={'#'} className={'link'}>email</a>👋.</p>
                    <Image
                        src={ContactImg}
                        className={'contact-me-image'}
                        alt={'Contact me'}
                        style={styles?.aboutProfile}
                    />
                </div>
                <div className={'contact-form'} style={styles?.contactForm}>
                    <Formik
                        initialValues={{ email: '', subject: '', message: '' }}
                        validate={values => {
                            const errors: any = {};
                            if (!values.email) {
                                errors.email = 'This field is required!';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.message) {
                                errors.message = 'This field is required!';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                Swal.fire({
                                    title: 'Message Sent',
                                    text: `Hey👋, thanks for your message!\nI will get back to you soon 😃`,
                                    icon: 'success'
                                });
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                          }) => (
                            <ContactForm onSubmit={handleSubmit} styles={styles?.formStyles}>
                                <ContactInputBlock>
                                    <ContactInput
                                        type="email"
                                        name="email"
                                        placeholder="E-mail Address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        styles={styles?.formStyles}
                                    />
                                    <ErrorMessage>{errors.email && touched.email && errors.email}</ErrorMessage>
                                </ContactInputBlock>
                                <ContactSubject
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subject}
                                    styles={styles?.formStyles}
                                />
                                <ContactInputBlock>
                                    <ContactMessage
                                        name="message"
                                        placeholder="Type your message..."
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                        styles={styles?.formStyles}
                                    />
                                    <ErrorMessage>{errors.message}</ErrorMessage>
                                </ContactInputBlock>
                                <ContactButton type="submit" disabled={isSubmitting}>
                                    Send Message
                                </ContactButton>
                            </ContactForm>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

