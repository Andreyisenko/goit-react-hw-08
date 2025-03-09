import { useEffect } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import PrivateRoute from '../../components/PrivateRoute';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PrivateRoute
        component={
          <div>
            <ContactForm />
            <SearchBox />
            <ContactList />
          </div>
        }
        redirectTo="/login"
      />
    </div>
  );
};

export default ContactsPage;
