import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Signup from './Signup/Signup'
import Navigtiion from './Navigation/Navigtion'


function App() {
  return (
   
      <div>
        <BrowserRouter>
        <Navigtiion/>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>

        </Routes>
        </BrowserRouter>

      </div>
        
  )
}

export default App
