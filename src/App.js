import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Viewcart from './components/Viewcart';
import { createContext, useState } from 'react';
import Footer from './components/Footer';

export const cartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{cart,setCart}}>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Viewcart' element={<Viewcart />} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    </cartContext.Provider>
  );
}

export default App;
