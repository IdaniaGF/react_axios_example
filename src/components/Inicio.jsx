import { useState } from "react"
import { useContext } from "react";
import { useEffect } from "react"
import { PersonajeContext } from "../context/PersonajeContext";
import { todosPersonajes } from "../functions/funciones"
import Personaje from "./Personaje";

const Inicio = () => {
    const {personajes, setPersonajes} = useContext(PersonajeContext)

    useEffect(()=>{
        todosPersonajes(setPersonajes)
    },[])

  return (
    <>
    {personajes != null ? (
        personajes.map(personaje =>(
            <div key={personaje.id}>
                <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
            </div>
        ))
    ):('no hay personajes')}
    </>
)
}

export default Inicio