import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { unicoPersonaje } from "../functions/funciones";
import { useContext } from "react";
import { PersonajeContext } from "../context/PersonajeContext";

const Personaje = () => {
  // el id está dentro de params
  const {personaje, setPersonaje} = useContext(PersonajeContext);
  const { id } = useParams();

  useEffect(() => {
    unicoPersonaje(id, setPersonaje);
  },[]);

  return (
    <>
      {personaje != null ? (
        <div>
          <h2>{personaje.name}</h2>
          <h3>{personaje.status}</h3>
          <h3>{personaje.specie}</h3>
          <h4>{personaje.gender}</h4>
          <img src={personaje.image} />
        </div>
      ) : (
        "no hay personaje"
      )}
    </>
  );
};

export default Personaje;
