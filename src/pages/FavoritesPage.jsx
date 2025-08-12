import React from "react";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

export default function FavoritesPage({ favorites, toggleFavorite }) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Favoritos</h1>
      {favorites.length === 0 && <p>Nenhum favorito salvo</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDetails={(id) => navigate(`/details/${id}`)}
            onToggleFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}
