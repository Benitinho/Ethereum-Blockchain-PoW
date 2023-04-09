import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home'
import { Products } from './components/products'
import { Cart } from './components/cart'
import { Transfers } from './components/transfers'
// import App from './App'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
       <Routes>
         <Route path ="/" element={<Home />}>
            <Route path ="Products" element={<Products />} />
            <Route path ="Cart" element={<Cart />} />
            <Route path ="Transfers" element={<Transfers />} /> 
         </Route>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
