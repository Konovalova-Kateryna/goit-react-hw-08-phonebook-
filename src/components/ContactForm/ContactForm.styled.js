import { Form, Field } from 'formik';
import styled from 'styled-components';

export const ContactFormStyle = styled.div`
  /* display: block; */
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
`;
export const Input = styled(Field)`
  border-radius: 4px;
  padding: 5px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  /* margin-left: 30px; */
  &:hover,
  &:active,
  &:focus-visible {
    border-color: violet;
    border: 2px solid violet;
    outline: none;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 20px;
`;
export const Label = styled.label`
  font-size: 18px;
  /* display: flex;
  align-items: baseline; */
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const ContactFormBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
`;
export const FormItem = styled.div`
  width: 300px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
`;
