import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      Navigation
      <nav className={css.linkNav}>
        <NavLink className={buildLinkClass} to="/">
          HomePage
        </NavLink>
        {isLoggedIn && (
          <NavLink className={buildLinkClass} to="/contacts">
            ContactsPage
          </NavLink>
        )}

        {/* <NavLink className={buildLinkClass} to="/register">
          RegistrationPage
        </NavLink> */}
        {/* <NavLink className={buildLinkClass} to="/login">
          LoginPage
        </NavLink> */}

        {/* <NavLink to='*'>NotFound</NavLink> */}
      </nav>
    </div>
  );
};

export default Navigation;
