import { useState } from "react";
import { createContext } from "react";

export const Carcontext = createContext();

export const CarProvider=({children})=>{
const [card,setCard] = useState([])

const add = (item)=>{
    setCard([...card,item])
    alert("Thêm thành công")
}
    return (
        <>
            <Carcontext.Provider value={{card,add}}>
                {children}
            </Carcontext.Provider>
        </>
    )
}