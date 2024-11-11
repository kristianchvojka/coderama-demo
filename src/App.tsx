import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import FavouritesPage from "./pages/FavouritesPage";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/detail/:movieId" element={<DetailPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
    </Routes>
  </Router>
);

export default App;
