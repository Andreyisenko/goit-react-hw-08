import clsx from "clsx";
import { NavLink } from "react-router-dom"
import css from './Navigation.module.css';
const Navigation = () => {

    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
      };
  return (
    <div>
        Navigation
<nav className={css.linkNav}>
    <NavLink className={buildLinkClass} to='/'>HomePage</NavLink>
    <NavLink className={buildLinkClass} to='/contacts'>ContactsPage</NavLink>
    <NavLink className={buildLinkClass} to='/register'>RegistrationPage</NavLink>
    <NavLink className={buildLinkClass} to='/login'>LoginPage</NavLink>
    {/* <NavLink to='*'>NotFound</NavLink> */}
</nav>
    </div>
  )
}

export default Navigation