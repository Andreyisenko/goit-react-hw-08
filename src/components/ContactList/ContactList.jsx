import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/slice';
// import { selectFilteredContacts } from '../../redux/contactsSlice';
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <>
      <ul className={css.wraperContact}>
        {contacts.map(item => (
          <li className={css.item} key={item.id}>
            <Contact contact={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
