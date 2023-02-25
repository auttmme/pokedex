import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonDetails from "./pages/PokemonDetails";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/Search";

function App() {
	return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
	);
}

export default App;
