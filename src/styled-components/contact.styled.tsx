import styled from 'styled-components';

// Contact Forms, inputs, buttons
export const ContactForm = styled.form<{ styles: any }>`
  width: ${(props) => props.styles?.contactFormWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.styles?.formMargin};
`;

export const ContactInput = styled.input<{ styles: any }>`
    width: ${(props) => props.styles?.contactInputWidth};
    height: 60px;
    border: 0;
    border-radius: 30px;
    background-color: #fff;
    font-size: 16px;
    font-weight: 400;
    color: #454360;
    line-height: 1.6;
    padding: 20px;
    -webkit-box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);
    -moz-box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);
    box-shadow: 0 5px 20px 0 rgba(69, 67, 96, 0.1);
    outline: none;
    font-style: inherit;

    &:focus {
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #5E5C7F;
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #5E5C7F;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #5E5C7F;
        }
    }
`;

export const ContactSubject = styled(ContactInput)<{ styles: any }>`
  width: ${(props) => props.styles?.contactSubjectWidth};
  margin-bottom: 20px;
`;

export const ContactMessage = styled.textarea<{ styles: any }>`
  width: ${(props) => props.styles?.contactTextareaWidth};
  height: 140px;
  border: 0;
  margin: ${(props) => props.styles?.margin};
  padding: 20px;
  font-family: inherit;
  border-radius: 30px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 400;
  color: #454360;
  line-height: 1.6;
  -webkit-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  -moz-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  resize: vertical;
  outline: none;
  &:focus {
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #5E5C7F;
      opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #5E5C7F;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: #5E5C7F;
    }
  }
`;

export const ContactButton = styled.button`
  background-color: #ff7769;
  color: #fff;
  border: 0;
  border-radius: 30px;
  width: 180px;
  outline: none;
  padding: 15px 30px;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
`;

export const ErrorMessage = styled.p`
  text-align: left;
  color: #dc3232;
  font-size: 1em;
  font-weight: normal;
  display: block;
  margin-top: 5px;
  padding-left: 15px;
`;

export const ContactInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;  
`;
