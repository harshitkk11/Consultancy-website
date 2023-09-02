import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactusForm from './pages/ContactusForm';
import About from './pages/About';

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
            <Route
            path='/about'
            element={<About/>}
            />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
