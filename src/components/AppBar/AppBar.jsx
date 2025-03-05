// import AuthNav from "../AuthNav/AuthNav"
import { useSelector } from "react-redux"
import Navigation from "../Navigation/Navigation"
import { selectIsLoggedIn} from "../../redux/auth/selectors"
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "../AuthNav/AuthNav"

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  // const user = useSelector(selectUser)
  return (
    <div>

        <Navigation/>
       {isLoggedIn ? <UserMenu/> : <AuthNav />}
        
    </div>
  )
}

export default AppBar