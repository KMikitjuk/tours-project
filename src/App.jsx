import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import FavoritesLink from './components/FavoritesLink';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import HomePage from './pages/Home';
// import TodoPage from './pages/Todo';
// import TodosPage from './pages/Todos';
import AboutUsPage from './pages/AboutUs';
import TravelsPage from './pages/Travels';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/todos" element={<TodosPage />} /> */}
          {/* <Route path="/todos/:todoId" element={<TodoPage />} /> */}
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/travels" element={<TravelsPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
