// import MovieList from './pages/MovieList'
import Wishlist from './pages/Wishlist'
import MovieList from './pages/MovieList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import MovieDetails from './pages/MovieDetails';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MovieList />}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/movie/:id" element={<MovieDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
