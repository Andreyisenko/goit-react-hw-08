import { Route, Routes } from 'react-router-dom';
import './App.css'
import toast from 'react-hot-toast';
import HomePage from '../pages/HomePage/HomePage';
import NotFound from '../pages/NotFound/NotFound';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
// import AppBar from './AppBar/AppBar';
import Layout from './Layout';
function App() {

  return (
  
     
      <Routes>

{/* <h1>goit-react-hw-08</h1>
      <button  onClick={()=> {
      toast.success('Successfully toasted!')
      
      }}>click</button>
 */}



        <Route path='/' element={<Layout/>} > 
        <Route index element={<HomePage/>}/>
        <Route path='contacts' element={<ContactsPage/>}/>
        <Route path='register' element={<RegistrationPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
   
  )
}

export default App
