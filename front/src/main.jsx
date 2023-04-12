import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home'
import { Products } from './components/products'
import { Pay } from './components/pay'
import { Transfers } from './components/transfers'
import { Card } from './components/card'
import { Carousel } from './components/carousel'
// import App from './App'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
       <Routes>
         <Route path ="/" element={<Home />}>
            <Route path ="Products" element={<Products />} />
            <Route path ="Pay" element={<Pay />} />
            <Route path ="Transfers" element={<Transfers />} /> 
            <Route path ="Card" element={<Card />} /> 
            <Route path ="Carousel" element={<Carousel />} /> 
         </Route>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
