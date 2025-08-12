import React from "react";

export default function MovieCard({
  movie,
  onDetails,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : ""
        }
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date?.split("-")[0]}</p>
      <button onClick={() => onDetails(movie.id)}>Ver detalhes</button>
      <button onClick={() => onToggleFavorite(movie)}>
        {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
      </button>
    </div>
  );
}
