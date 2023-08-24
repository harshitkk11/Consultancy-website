import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactusForm from './pages/ContactusForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
            path='/'
            element={<Home/>}
            />
            <Route
            path='/contactus'
            element={<ContactusForm/>}
            />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
