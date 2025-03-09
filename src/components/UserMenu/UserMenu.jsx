import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from './UserMenu.module.css'
const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

  return (
    <div className={css.wrap}>
        <h2 className={css.title}>Welcome, {user.name}</h2>
        <button className={css.btN} type="button" onClick={()=> dispatch(logOut())}>Logout</button>
    </div>
  )
}

export default UserMenu