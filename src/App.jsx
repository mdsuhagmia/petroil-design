import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/root/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'


let routering = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/about/service' element={<Service/>}></Route>
    <Route path='/about/service/gallery' element={<Gallery/>}></Route>
    <Route path='/about/service/gallery/blog' element={<Blog/>}></Route>
    <Route path='/about/service/gallery/blog/contact' element={<Contact/>}></Route>
  </Route> 
))

function App() {
  
  return (
    <>
      <RouterProvider router={routering}></RouterProvider>
    </>
  )
}

export default App
