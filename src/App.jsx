import React from 'react'
import './App.css'
import Fullpage from './component/Full Page/Fullpage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout page/Layout'
import Search from './component/Search element/Search'
import Tvmovies from './component/Tv element/Tvmovies'
import Movies from './component/Movies element/Movies'
import Sports from './component/Sports element/Sports'
import Categories from './component/Categories element/Categories'



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Fullpage />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/tvmovies' element={<Tvmovies />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/sports' element={<Sports />}/>
        <Route path='/categories' element={<Categories />}/>
      </Route>
    )
  )

  return (
    <div className="bg-zinc-950">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
