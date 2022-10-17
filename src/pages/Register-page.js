import { ErrorMessage, Formik } from 'formik';
import Notiflix from 'notiflix';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import {
  Input,
  StyledForm,
  Label,
  FormTitle,
  ContactFormBtn,
  FormItem,
} from '../components/ContactForm/ContactForm.styled';
import { SectionBox } from '../components/Section/SectionTitle.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    dispatch(authOperations.register({ ...value }));
    resetForm();
  };
  return (
    <SectionBox>
      <FormTitle>Register</FormTitle>
      <Formik
        initialValues={{ password: '', email: '', name: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <FormItem>
            <Label>Name:</Label>
            <Input type="text" name="name" />
            <ErrorMessage name="name">
              {() => Notiflix.Notify.failure('Name is required field')}
            </ErrorMessage>
          </FormItem>
          <FormItem>
            <Label>Email:</Label>
            <Input type="email" name="email" />
            <ErrorMessage name="email">
              {() => Notiflix.Notify.failure('Email is required field')}
            </ErrorMessage>
          </FormItem>
          <FormItem>
            <Label>Password:</Label>
            <Input type="password" name="password" />
            <ErrorMessage name="password">
              {() => Notiflix.Notify.failure('Password is required field')}
            </ErrorMessage>
          </FormItem>
          <ContactFormBtn type="submit">Register</ContactFormBtn>
        </StyledForm>
      </Formik>
    </SectionBox>
  );
};

export default Register;
