import Home from './pages/Home'
import NavBar from './components/NavBar'
import FavBooks from './pages/Favorite-books'
import {BookProvider } from './context/context'
import BookDescription from './pages/BookDescription'


import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BookProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/favBooks" element={<FavBooks/>}></Route>
      <Route path="/Books/:id" element={<BookDescription/>}></Route>

    </Routes>
  </BookProvider>
  )
}
export default App;

