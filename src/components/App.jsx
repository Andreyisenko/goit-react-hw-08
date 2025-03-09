import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import RestrictedRoute from './RestrictedRoute';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginForm = lazy(() => import('./LoginForm/LoginForm'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    
    <Layout>
    <Routes>
      <Route path="/" element={<HomePage />}/>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="/contacts" element={<ContactsPage />} />
      {/* </Route> */}
      <Route path="register" element={<RegistrationPage />} />
      <Route
        path="login"
        element={
          <RestrictedRoute component={<LoginForm />} redirectTo="/contacts" />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Layout>
  );
}

export default App;
