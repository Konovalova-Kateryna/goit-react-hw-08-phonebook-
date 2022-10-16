import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { SectionBox, Title } from 'components/Section/SectionTitle.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contacts/contacts-operations';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <SectionBox>
      <ContactForm />
      <div>{isLoading && !error && 'Request in progress....'}</div>
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </SectionBox>
  );
};

export default Contacts;
