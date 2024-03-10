import Home from './Pages/Home'
import About from './Pages/About'
import './App.css'
import Products from './Pages/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navs from "./components/Nav";
import DetailPage from './Pages/DetailPage';
import MyHook from './hooks/MyHook';
import Blogs from './hooks/FetchData'
import PageNotFound from './Pages/404Page'
import Login from './Pages/Login'
import Register from './Pages/Register';
import Loader from './components/Loader';
import { PageTheme } from './contexts/ThemeContext';
import { useContext } from 'react';
import Countries from './Pages/Countries';
import ConDetailPage from './Pages/ConDetailPage';




function App() {

  const {theme} = useContext(PageTheme)

  // always write your javascript before this return
  return (

    <div className={`bg-${theme} ${theme === "dark" ? "text-light" : "text-dark"}`}>
   
    
    {/* Routing pages */}
    <BrowserRouter>
    <Navs/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path='/hook' element={<MyHook/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/loader' element={<Loader/>}/>
        <Route path='/countries' element={<Countries/>}/>
        <Route path='/condetail' element={<ConDetailPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>

  )
}

export default App