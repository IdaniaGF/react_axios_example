import { useState, useEffect, createContext } from "react";
import { todosPersonajes, unicoPersonaje } from "../functions/funciones";

export const PersonajeContext = createContext(); 

export const PersonajeContextProvider = (props) => {
    const [personajes, setPersonajes] = useState(null)
    const [personaje, setPersonaje] = useState(null)

    return (
        <PersonajeContext.Provider value={{personajes, setPersonajes, personaje, setPersonaje}}>
            {props.children}
        </PersonajeContext.Provider>
    )
}