import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleFavorite = (movie) => {
    const exists = favorites.some((f) => f.id === movie.id);
    let updated;
    if (exists) {
      updated = favorites.filter((f) => f.id !== movie.id);
    } else {
      updated = [...favorites, movie];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          padding: "10px",
          background: darkMode ? "#222" : "#f0f0f0",
          color: darkMode ? "#fff" : "#000",
        }}
      >
        <Link to="/" style={{ color: darkMode ? "#fff" : "#000" }}>
          Buscar
        </Link>
        <Link to="/favorites" style={{ color: darkMode ? "#fff" : "#000" }}>
          Favoritos
        </Link>
        <button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "☀️ Claro" : "🌙 Escuro"}
        </button>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <SearchPage favorites={favorites} toggleFavorite={toggleFavorite} />
          }
        />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </Router>
  );
}
