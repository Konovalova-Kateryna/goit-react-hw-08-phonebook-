import { Formik, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-operations';

import {
  Input,
  StyledForm,
  Label,
  ContactFormStyle,
  FormTitle,
  ContactFormBtn,
  FormItem,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === value.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${value.name} is alredy in contacts.`);
      resetForm();
      return;
    } else if (
      contacts.find(contact => contact.number.toString() === value.number)
    ) {
      Notiflix.Notify.failure(`${value.number} is alredy in contacts.`);
      resetForm();
      return;
    }
    dispatch(addContact(value));
    Notiflix.Notify.success(`Contact added`);
    resetForm();
  };

  return (
    <ContactFormStyle>
      <FormTitle>Phonebook</FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <FormItem>
            <Label>Name:</Label>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter contact name"
            />
            <ErrorMessage name="name">
              {() => Notiflix.Notify.failure('Name is required field')}
            </ErrorMessage>
          </FormItem>
          <FormItem>
            <Label>Telephone:</Label>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Enter contact phone"
            />
            <ErrorMessage name="number">
              {() => Notiflix.Notify.failure('Number is required field')}
            </ErrorMessage>
          </FormItem>

          <ContactFormBtn type="submit">Add contact</ContactFormBtn>
        </StyledForm>
      </Formik>
    </ContactFormStyle>
  );
};

export default ContactForm;
