import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import Notiflix from 'notiflix';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(contact.id);
    dispatch(deleteContact(contact.id));
    Notiflix.Notify.warning(`Contact deleted`);
  };

  return (
    <>
      {contact.name} : {contact.number}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
