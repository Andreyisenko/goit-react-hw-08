import { Route, Routes } from 'react-router-dom';
import './App.css';
// import toast from 'react-hot-toast';
import HomePage from '../pages/HomePage/HomePage';
import NotFound from '../pages/NotFound/NotFound';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
// import AppBar from './AppBar/AppBar';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import RestrictedRoute from './RestrictedRoute';
import LoginForm from './LoginForm/LoginForm';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from '../redux/contacts/operations';
function App() {
  // const dispatch = useDispatch()
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      {/* <h1>goit-react-hw-08</h1>
      <button  onClick={()=> {
      toast.success('Successfully toasted!')
      
      }}>click</button>
 */}

      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route path="register" element={<RegistrationPage />} />
      <Route
        path="login"
        element={
          <RestrictedRoute component={<LoginForm />} redirectTo="/contacts" />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
