import { useContext } from "react";
import { Carcontext } from "../../context/cardProvider";
import "../Item/Item.css"
function Item({id,img,title,des,price}){
    const {add} = useContext(Carcontext)
    return (
        <>
            <div class="card">
                <div class="card-body">
                <img class="card-img-top" src={img} alt=""/>
                    <h4 class="card-title">{title}</h4>
                    <p class="card-text">{des}</p>
                    <span>{price}</span>
                </div>
                <div className="card-footer">
                    <button onClick={()=>add({img,title,des,price})} type="button" className="btn">Thêm vào giỏ hàng</button>
                </div>
            </div>
        </>
    )
}

export default Item;