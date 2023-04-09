import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home'
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import { Transfers } from './components/Transfers'
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
