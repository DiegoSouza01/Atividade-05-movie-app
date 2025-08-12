import React, { useState, useEffect } from "react";
import { searchMovies } from "../api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

export default function SearchPage({ favorites, toggleFavorite }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  const handleSearch = async (p = 1) => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const data = await searchMovies(query, p);
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setPage(p);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Buscar Filmes</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => handleSearch()}>Buscar</button>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDetails={(id) => navigate(`/details/${id}`)}
            onToggleFavorite={toggleFavorite}
            isFavorite={favorites.some((f) => f.id === movie.id)}
          />
        ))}
      </div>

      {movies.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handleSearch}
        />
      )}
    </div>
  );
}
