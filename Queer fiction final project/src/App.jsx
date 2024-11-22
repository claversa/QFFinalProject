import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import BookList from './pages/BookList.jsx';
import MovieList from './pages/MovieList.jsx';
import MusicianList from './pages/MusicianList.jsx';
import BookReview from './pages/BookReview.jsx';
import MovieReview from './pages/MovieReview.jsx';
import MusicReview from './pages/MusicReview.jsx';

function App() {
  return (
    <div className="bg-indigo-950 min-h-screen text-white">
      <BrowserRouter>
        <nav className='ml-5 flex flex-row space-x-10 font-semibold text-lg mb-10'>
          <Link className="hover:text-indigo-200" to="/">Home</Link>
          <Link className="hover:text-indigo-200" to="/bookList">Book Reviews</Link>
          <Link className="hover:text-indigo-200" to="/movieList">Movie Reviews</Link>
          <Link className="hover:text-indigo-200" to="/musicianList">Musician Reviews</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bookList" element={<BookList />} />
          <Route path="/bookReview/:id" element={<BookReview />} />
          <Route path="/movieList" element={<MovieList />} />
          <Route path="/movieReview/:id" element={<MovieReview />} />
          <Route path="/musicianList" element={<MusicianList />} />
          <Route path="/musicReview/:id" element={<MusicReview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
