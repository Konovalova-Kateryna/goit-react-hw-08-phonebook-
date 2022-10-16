import { Form, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import {
  ContactFormStyle,
  StyledForm,
  Input,
  Label,
  FormTitle,
  ContactFormBtn,
  FormItem,
} from '../components/ContactForm/ContactForm.styled';
import { SectionBox } from '../components/Section/SectionTitle.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    dispatch(authOperations.logIn({ ...value }));
    console.log(value);
    resetForm();
  };
  return (
    <SectionBox>
      <FormTitle>Log in</FormTitle>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <FormItem>
            <Label>Email:</Label>
            <Input type="email" name="email" />
          </FormItem>
          <FormItem>
            <Label>Password:</Label>
            <Input type="password" name="password" />
          </FormItem>
          <ContactFormBtn type="submit">Log in</ContactFormBtn>
        </StyledForm>
      </Formik>
    </SectionBox>
  );
};

export default LoginForm;
