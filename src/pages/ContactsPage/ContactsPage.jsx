import { useEffect } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm/>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
