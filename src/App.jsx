import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Signin from './components/forms/Signin.jsx'
import { Routes ,Route } from 'react-router-dom';
const App= () => {
    return (
        <div>
        
          <Navbar />
          <Routes>
          <Route path='/' element={<Signin/>} />
          </Routes>
          
          <Footer />
          
            </div>
    )

}

export default App
