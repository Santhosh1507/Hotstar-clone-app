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
import Viewlateatr from '../component/viewsliderall/Latest Releases/Viewlateatr'
import Viewtop10movies from '../component/viewsliderall/Top 10 in india Today - Hindi/Viewtop10movies'
import Viewbestofsuperheros from '../component/viewsliderall/Best of Superheros/Viewbestofsuperheros'
import Viewbingeworthydramashows from '../component/viewsliderall/Bingeworthy Drama Shows/Viewbingeworthydramashows'
import Viewblackbustermovies from '../component/viewsliderall/Blackbuster movies/Viewblackbustermovies'
import Viewbrandshows from '../component/viewsliderall/Brandshows/Viewbrandshows'
import Viewcomingsoon from '../component/viewsliderall/Coming Soon/Viewcomingsoon'
import Viewcrimesleuths from '../component/viewsliderall/Crime Sleuths/Viewcrimesleuths'
import Viewcriticallyacclaimedmovies from '../component/viewsliderall/Critically Acclaimed Movies/Viewcriticallyacclaimedmovies'
import Viewexculsiveindianmovies from '../component/viewsliderall/Exculsive indian movies/Viewexculsiveindianmovies'
import Viewforeigndubbedshows from '../component/viewsliderall/Foreign Dubbed Shows/Viewforeigndubbedshows'
import Viewhotstarspecial from '../component/viewsliderall/Hotstar Specials/Viewhotstarspecial'
import Viewkdramaland from '../component/viewsliderall/K-Dramaland/Viewkdramaland'
import Viewmoviesfromthe from '../component/viewsliderall/Movies from the 2010s/Viewmoviesfromthe'
import Viewpopulargenres from '../component/viewsliderall/Popular Genres/Viewpopulargenres'
import Viewpopularinaction from '../component/viewsliderall/Popular in Action/Viewpopularinaction'
import Viewpopularinbiopic from '../component/viewsliderall/Popular in Biopic/Viewpopularinbiopic'
import Viewpopularinchannals from '../component/viewsliderall/Popular in Channels/Viewpopularinchannals'
import Viewpopularincomedy from '../component/viewsliderall/Popular in Comedy/Viewpopularincomedy'
import Viewpopularincrime from '../component/viewsliderall/Popular in Crime/Viewpopularincrime'
import Viewpopularindocumentary from '../component/viewsliderall/Popular in Documentary/Viewpopularindocumentary'
import Viewpopularindream from '../component/viewsliderall/Popular in Dream/Viewpopularindream'
import Viewpopularinfamily from '../component/viewsliderall/Popular in Family/Viewpopularinfamily'
import Viewpopularinmythology from '../component/viewsliderall/Popular in Mythology/Viewpopularinmythology'
import Viewpopularinreality from '../component/viewsliderall/Popular in Reality/Viewpopularinreality'
import Viewpopularinromance from '../component/viewsliderall/Popular in Romance/Viewpopularinromance'
import Viewpopularintalkshow from '../component/viewsliderall/Popular in Talkshow/Viewpopularintalkshow'
import Viewpopularinteen from '../component/viewsliderall/Popular in Teen/Viewpopularinteen'
import Viewpopularinthriller from '../component/viewsliderall/Popular in Thriller/Viewpopularinthriller'
import Viewpopularintravel from '../component/viewsliderall/Popular in Travel/Viewpopularintravel'
import Viewpopularinkids from '../component/viewsliderall/Popular kids/Viewpopularinkids'
import Viewpopularlanguage from '../component/viewsliderall/Popular Language/Viewpopularlanguage'
import Viewpopularmovies from '../component/viewsliderall/Popular movie/Viewpopularmovies'
import Viewpopular from '../component/viewsliderall/Popular Shows/Viewpopular'
import Viewtalesfromjapan from '../component/viewsliderall/Tales From Japan/Viewtalesfromjapan'
import Viewtoprated from '../component/viewsliderall/Top Rated on IMDb/Viewtoprated'


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
            <Route path='/home/latest' element={<Viewlateatr />} />
            <Route path='/home/top10movies' element={<Viewtop10movies />} />
            <Route path='/home/bestofsuperheros' element={<Viewbestofsuperheros />} />
            <Route path='/home/bingeworthydramashows' element={<Viewbingeworthydramashows />} />
            <Route path='/home/blackbustermovies' element={<Viewblackbustermovies />} />
            <Route path='/home/brandshows' element={<Viewbrandshows />} />
            <Route path='/home/comingsoon' element={<Viewcomingsoon />} />
            <Route path='/home/crimesleuths' element={<Viewcrimesleuths />} />
            <Route path='/home/criticallyacclaimedmovies' element={<Viewcriticallyacclaimedmovies />} />
            <Route path='/home/exculsiveindianmovies' element={<Viewexculsiveindianmovies />} />
            <Route path='/home/foreigndubbedshows' element={<Viewforeigndubbedshows />} />
            <Route path='/home/hotstarspecial' element={<Viewhotstarspecial />} />
            <Route path='/home/kdramaland' element={<Viewkdramaland />} />
            <Route path='/home/moviesfromthe' element={<Viewmoviesfromthe />} />
            <Route path='/home/populargenres' element={<Viewpopulargenres />} />
            <Route path='/home/popularinaction' element={<Viewpopularinaction />} />
            <Route path='/home/popularinbiopic' element={<Viewpopularinbiopic />} />
            <Route path='/home/popularinchannals' element={<Viewpopularinchannals />} />
            <Route path='/home/popularincomedy' element={<Viewpopularincomedy />} />
            <Route path='/home/popularincrime' element={<Viewpopularincrime />} />
            <Route path='/home/popularindocumentary' element={<Viewpopularindocumentary />} />
            <Route path='/home/popularindream' element={<Viewpopularindream />} />
            <Route path='/home/popularinfamily' element={<Viewpopularinfamily />} />
            <Route path='/home/popularinmythology' element={<Viewpopularinmythology />} />
            <Route path='/home/popularinreality' element={<Viewpopularinreality />} />
            <Route path='/home/popularinromance' element={<Viewpopularinromance />} />
            <Route path='/home/popularintalkshow' element={<Viewpopularintalkshow />} />
            <Route path='/home/popularinteen' element={<Viewpopularinteen />} />
            <Route path='/home/popularinthriller' element={<Viewpopularinthriller />} />
            <Route path='/home/popularintravel' element={<Viewpopularintravel />} />
            <Route path='/home/popularinkids' element={<Viewpopularinkids />} />
            <Route path='/home/popularlanguage' element={<Viewpopularlanguage />} />
            <Route path='/home/popularmovies' element={<Viewpopularmovies />} />
            <Route path='/home/popular' element={<Viewpopular />} />
            <Route path='/home/talesfromjapan' element={<Viewtalesfromjapan />} />
            <Route path='/home/toprated' element={<Viewtoprated />} />
          </Route>
      </Routes>
    </div>
  )
}

export default Rootlayout