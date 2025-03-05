import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

  return (
    <div>
        <h2>Welcome, {user.name}</h2>
        <button type="button" onClick={()=> dispatch(logOut())}>Logout</button>
    </div>
  )
}

export default UserMenu