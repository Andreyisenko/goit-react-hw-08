import { IoCall } from 'react-icons/io5';
import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p className={css.name}>
        <FaUser size={18} /> {name}
      </p>
      <p>
        <IoCall size={12} /> {number}
      </p>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={css.btnContact}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
