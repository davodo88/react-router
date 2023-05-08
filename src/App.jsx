import NavBar from './components/navBar'
import Inicio from './pages/Inicio'
import Contacto from './pages/contacto'
import Blog from './pages/blog'
import { Routes, Route } from 'react-router-dom'
import LayoutPublic from './layouts/layoutPublic'
import NotFound from './pages/notFound'

import './index.css'
import BlogDetails from './pages/blogDetails'


const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<LayoutPublic />} >
          <Route element={<Inicio />} index></Route>
          <Route element={<Contacto />} path='/Contacto'></Route>
          <Route element={<Blog />} path='/Blog'></Route>
          <Route element={<BlogDetails />} path='/Blog/:id'></Route>
        </Route>
        <Route element={<NotFound />} path='*'></Route>
      </Routes>
    </>
  )
}
export default App
