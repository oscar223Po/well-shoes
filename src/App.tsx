import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout/Layout'
import About from './pages/About/About'
import BlogNews from './pages/BlogNews/BlogNews'
import CareerPage from './pages/CareerPage/CareerPage'
import Catalog from './pages/Catalog/Catalog'
import Contact from './pages/Contact/Contact'
import Gallery from './pages/Gallery/Gallery'
import Home from './pages/Home/Home'
import Purchase from './pages/Purchase/Purchase'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog-news" element={<BlogNews />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App