import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span>
        {" "}
        Página {currentPage} de {totalPages}{" "}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próxima
      </button>
    </div>
  );
}
