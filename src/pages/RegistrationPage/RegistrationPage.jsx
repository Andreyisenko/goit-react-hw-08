import { Field, Form, Formik } from "formik"
import css from './RegistrationPage.module.css' 
const RegistrationPage = () => {
  const initialValues ={
name: '',
email: '',
password: '',
  }
  const handleSubmit = (values, options)=>{
console.log(values);
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
  </Form>
</Formik>
<p>111@gmail.com</p>
    </div>
  )
}

export default RegistrationPage