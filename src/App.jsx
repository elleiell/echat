
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import Welcome from './components/Welcome'

const App = () => {

  return (
    <>
      <div>
        <div className='font-sans mx-auto flex flex-wrap justify-center p-0 m-0 items-center'>

            <BrowserRouter>              
              <Routes>
              <Route 
                  exact
                  path="/"
                  element={<Welcome />}
                />

                <Route 
                  exact
                  path="/login"
                  element={<Login />}
                />
                
                <Route
                  exact
                  path="/signup"
                  element={<Signup />}
                />
              </Routes>
            </BrowserRouter>               

        </div> 
      </div>
    </>
  )
}

export default App
