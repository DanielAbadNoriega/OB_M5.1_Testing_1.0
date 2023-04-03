import React, { useState } from "react";

const InputNuevaNota = ({ addNuevaNota }) => {
  const [nuevaNota, setNuevaNota] = useState("");

  const setNewTask = () => {
    addNuevaNota(nuevaNota);
    setNuevaNota("");
  };

  return (
    <div className="input-nueva-nota">
      <input
        type="text"
        placeholder="Introduce una nueva nota"
        value={nuevaNota}
        onKeyDown={(e) => e.key === "Enter" && setNewTask()}
        onChange={(e) => setNuevaNota(e.target.value)}
      />
      <button onClick={() => addNuevaNota(nuevaNota) && setNewTask()}>
        Añadir
      </button>
    </div>
  );
};

export default InputNuevaNota;
