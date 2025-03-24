import { useState } from "react"
import data from "../../data/product"
import { useEffect } from "react"
import Item from "../Item/Item"
import "../MenuList/MenuList.css"
function MenuList(){
    const [arr,setArr] = useState([])
    useEffect(()=>{
        setArr(data)
    },[])
    return (
        <>
            <div className="menu">
                {arr.map((item)=>(
                    <Item key={item.id} img={item.image} title={item.title} des={item.descibe} price={item.price}/>
                ))}
            </div>
        </>
    )
}

export default MenuList;