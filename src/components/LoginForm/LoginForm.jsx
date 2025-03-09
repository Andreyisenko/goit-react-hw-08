import { ErrorMessage, Field, Form, Formik, replace } from 'formik';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useId } from 'react';
import * as Yup from 'yup';

const LoginForm = () => {


  const emailFieldId = useId();
  const pasFieldId = useId();
  // const dispatch = useDispatch();
  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      password: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });


  
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.formReg}>
          <label htmlFor={emailFieldId} className={css.labelReg}>
            <span>Email:</span>
            <Field className={css.inputReg} name="email" type="email" id={emailFieldId}/>
          </label>
          <ErrorMessage className={css.spn} name="email" component="span" />
          



          <label htmlFor={pasFieldId} className={css.labelReg}>
            <span>Password:</span>
            <Field className={css.inputReg} name="password" type="password" id={pasFieldId} />
          </label>
          <ErrorMessage className={css.spn} name="password" component="span" />

          <button className={css.buttonReg} type="submit">
          <b>Login</b>
          </button>
          <p>You do not have account yet? <Link to='/register'> <b>Get IT! </b></Link></p>
         
        </Form>
      </Formik>
      <p>partalogni@gufum.com</p>
      <p>Petroartalogni@gufum.com</p>
    </div>
  );
};

export default LoginForm;
