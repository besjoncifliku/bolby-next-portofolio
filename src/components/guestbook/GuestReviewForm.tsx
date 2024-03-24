import React, { useEffect, useRef } from 'react';
import {
    GuestDetailBox,
    GuestForm,
    GuestMessage
} from "@/styled-components/guest.styled";
import Swal from "sweetalert2";
import {
    ContactButton,
    ErrorMessage
} from "@/styled-components/contact.styled";
import { Formik } from "formik";
import { useFocus } from "@/hooks/useFocus";

export const GuestReviewForm = ({}) => {
    const [nameRefFocus, sateNameRefFocus] = useFocus()
    const [messageRefFocus, sateMessageRefFocus] = useFocus()
    const [linkRefFocus, sateLinkRefFocus] = useFocus()


    useEffect(() => {
        if (!nameRefFocus.current) {
            return;
        }
        nameRefFocus.current.addEventListener('click', sateNameRefFocus);

        return () => {
            if (!nameRef.current || !messageRef.current || !linkRef.current) {
                return;
            }
            nameRef.current.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div>
            <Formik
                initialValues={{ name: '', avatarLink: '', message: '' }}
                validate={values => {
                    const errors: any = {};
                    if (!values.name) {
                        errors.email = 'This field is required!';
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
                    <GuestForm onSubmit={handleSubmit}>
                        <GuestDetailBox type="text"
                                        name="name"
                                        placeholder="Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                        />
                        <ErrorMessage>
                            {errors.name && touched.name && errors.name}
                        </ErrorMessage>
                        <GuestDetailBox type="text"
                                        name="link"
                                        placeholder="Avatar Link"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                        />
                        <ErrorMessage>
                            {errors.avatarLink && touched.avatarLink && errors.avatarLink}
                        </ErrorMessage>
                        <GuestMessage
                            name="message"
                            placeholder="Your message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                        />
                        <ErrorMessage>{errors.message}</ErrorMessage>
                        <ContactButton type="submit" disabled={isSubmitting}>
                            Leave a comment
                        </ContactButton>
                    </GuestForm>
                )}
            </Formik>
        </div>
    );
}
