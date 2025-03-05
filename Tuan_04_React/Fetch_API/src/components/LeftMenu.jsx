import { useEffect, useState } from "react"
import Item from "./Item";
export default function LeftMenu(){
    var arr = [];
    const [arr,setArr] = useState([]);
    var url = "";

    useEffect(()=>{
        var fn = fetch(url).then((r)=>r.json).then((data)=>{
            setArr(data);
        })
    })

    return(
        <>
        <ul>
            {arr.map((item,index)=>{
                <li key={index}>
                    <Item img={item.img} descibe = {item.descibe} minute = {item.minute}/>
                </li>
            })}
        </ul>
        </>
    )
}