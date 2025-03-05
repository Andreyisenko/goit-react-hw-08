import clsx from "clsx";
import { NavLink } from "react-router-dom"
import css from './AuthNav.module.css' 
const AuthNav = () => {
   const buildLinkClass = ({ isActive }) => {
      return clsx(css.navI, css.link, isActive && css.active );
    };
  return (
    <div>
      {/* <nav className={css.linkNav}> */}
        <NavLink className={buildLinkClass} to='/register'>RegistrationPage</NavLink>
    
    <NavLink className={buildLinkClass}  to='/login'>LoginPage</NavLink>
    {/* </nav> */}
    </div>
  )
}

export default AuthNav