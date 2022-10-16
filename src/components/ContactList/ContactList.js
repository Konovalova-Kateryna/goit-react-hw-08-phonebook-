import Contact from '../Contact';
import { List, ListItem, ContactListBox } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ContactListBox>
      <List>
        {filteredContacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              <Contact contact={contact} />
            </ListItem>
          );
        })}
      </List>
    </ContactListBox>
  );
};

export default ContactList;
