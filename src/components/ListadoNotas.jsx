import React from "react";

const ListadoNotas = ({ notas = [] }) => {
  return (
    <div className="lista-notas" aria-label="listado-notas">
      {notas.map((nota, i) => (
        <div key={i} style={{borderRadius: "5px"}}>{nota}</div>
      ))}
    </div>
  );
};

export default ListadoNotas;
