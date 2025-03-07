import { Field, Form, Formik, replace } from 'formik';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(logIn(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome page ${res.user.email}`);
        navigate('/contacts', { replace: true });
      })
      .catch(() => toast.error('Invalid data'));
    // navigate('/contacts');
    options.resetForm();
  };
  return (
    <div className={css.formWrap}>
      {/* RegistrationPage */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formReg}>
          <label className={css.labelReg}>
            <span>Email:</span>
            <Field className={css.inputReg} name="email" type="email" />
          </label>
          <label className={css.labelReg}>
            <span>Password:</span>
            <Field className={css.inputReg} name="password" type="password" />
          </label>
          <button className={css.buttonReg} type="submit">
          Login
          </button>
          <p>You do not have account yet? <Link to='/register'> <b>Get IT! </b></Link></p>
         
        </Form>
      </Formik>
      <p>partalogni@gufum.com</p>
    </div>
  );
};

export default LoginForm;
