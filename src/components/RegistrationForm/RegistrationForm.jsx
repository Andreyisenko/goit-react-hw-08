import { Field, Form, Formik } from "formik"
import css from './RegistrationForm.module.css' 
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations"
import { Link } from "react-router-dom"
const RegistrationForm = () => {
  const dispatch = useDispatch()
  const initialValues ={
name: '',
email: '',
password: '',
  }
  const handleSubmit = (values, options)=>{
console.log(values);
dispatch(register(values))
options.resetForm()
  }
  return (
    <div className={css.formWrap}>
      {/* RegistrationPage */}
<Formik initialValues={initialValues} onSubmit={handleSubmit}>
  <Form className={css.formReg}>
    <label className={css.labelReg}>
      <span>Name:</span>
      <Field className={css.inputReg} name='name'/>
    </label>
    <label className={css.labelReg}>
      <span>Email:</span>
      <Field className={css.inputReg} name='email' type='email'/>
    </label>
    <label className={css.labelReg}>
      <span>Password:</span>
      <Field className={css.inputReg} name='password' type='password'/>
    </label>
    <button  className={css.buttonReg}type="submit">Register</button>
    <p>You already have account ? <Link to='/login'><b> Log in! </b></Link></p>
  </Form>
</Formik>
<p>111@gmail.com</p>
    </div>
  )
}

export default RegistrationForm