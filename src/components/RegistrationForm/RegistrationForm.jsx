import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useId } from 'react';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const pasFieldId = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()

      .then(res => {
        toast.success(`Welcome page ${res.user.email}`);
        navigate('/contacts', { replace: true });
      })
      .catch(() => toast.error('Invalid data'));

    options.resetForm();
  };
  return (
    <div className={css.formWrap}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.formReg}>
          <label className={css.labelReg} htmlFor={nameFieldId}>
            <span>Name:</span>
            <Field className={css.inputReg} name="name" id={nameFieldId} />
          </label>
          <ErrorMessage className={css.spn} name="name" component="span" />

          <label htmlFor={emailFieldId} className={css.labelReg}>
            <span>Email:</span>
            <Field
              id={emailFieldId}
              className={css.inputReg}
              name="email"
              type="email"
            />
          </label>
          <ErrorMessage className={css.spn} name="email" component="span" />

          <label htmlFor={pasFieldId} className={css.labelReg}>
            <span>Password:</span>
            <Field
              id={pasFieldId}
              className={css.inputReg}
              name="password"
              type="password"
            />
          </label>
          <ErrorMessage className={css.spn} name="password" component="span" />

          <button className={css.buttonReg} type="submit">
            <b>Register</b>
          </button>
          <p>
            You already have account ?{' '}
            <Link to="/login">
              <b> Log in! </b>
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
