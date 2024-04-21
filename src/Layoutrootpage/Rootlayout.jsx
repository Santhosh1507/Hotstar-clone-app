import React from 'react'
import Fullpage from '../component/Full Page/Fullpage'
import { Route, Routes } from 'react-router-dom'
import Layout from '../component/Layout page/Layout'
import Search from '../component/Search element/Search'
import Tvmovies from '../component/Tv element/Tvmovies'
import Movies from '../component/Movies element/Movies'
import Sports from '../component/Sports element/Sports'
import Categories from '../component/Categories element/Categories'
import Loginpage from '../Login page/Loginpage'


const Rootlayout = () => {
  // const router = createBrowserRouter(
  //     createRoutesFromElements(
  //       <Route path='/' element={<Layout />}>
  //         <Route index element={<Fullpage />}/>
  //         <Route path='/search' element={<Search />}/>
  //         <Route path='/tvmovies' element={<Tvmovies />}/>
  //         <Route path='/movies' element={<Movies />}/>
  //         <Route path='/sports' element={<Sports />}/>
  //         <Route path='/categories' element={<Categories />}/>
  //       </Route>
  //     )
  //   )
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginpage />} />
          <Route path='/home' element={<Layout />}>
            <Route index element={<Fullpage />} />
            <Route path='/home/search' element={<Search />} />
            <Route path='/home/tvmovies' element={<Tvmovies />} />
            <Route path='/home/movies' element={<Movies />} />
            <Route path='/home/sports' element={<Sports />} />
            <Route path='/home/categories' element={<Categories />} />
          </Route>
      </Routes>
    </div>
  )
}

export default Rootlayout