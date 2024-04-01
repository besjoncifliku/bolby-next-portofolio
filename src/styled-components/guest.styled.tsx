import styled from 'styled-components';

// Contact Forms, inputs, buttons
export const GuestForm = styled.form`
  width: 300px;
  flex-direction: column;
  align-items: center;
`;

export const GuestDetailBox = styled.input`
    width: 650px;
    height: 60px;
    border: 0;
    border-radius: 15px;
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
    margin-bottom: 10px;
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

export const GuestMessage = styled.textarea`
  width: 650px;
  height: 140px;
  border: 0;
  padding: 20px;
  font-family: inherit;
  border-radius: 20px;
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