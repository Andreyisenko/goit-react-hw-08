import './App.css'
import toast from 'react-hot-toast';
function App() {

  return (
    <>
      <h1>goit-react-hw-08</h1>
      <button onClick={()=> {
      toast.success('Successfully toasted!')
      
      }}>click</button>
    </>
  )
}

export default App
