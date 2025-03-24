import { useContext } from "react";
import { useState } from "react";
import {Carcontext} from "../../context/cardProvider"
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter} from "react-bootstrap"
function BookTable(){
    const [show,setShow] = useState(false)
    const{card} = useContext(Carcontext)
    const open = ()=> setShow(true)
    const close = ()=> setShow(false)
    return (
        <>
            <button onClick={open} type="button" className="btn btn-primary">Book table</button>


        <Modal show={show} onHide = {close}>
            <ModalHeader>
                <ModalTitle>
                    Giỏ hàng
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                {card.length===0?(
                    <p>Giỏ hàng trống</p>
                ):(
                    <>
                        {card.map((item)=>(
                            <div>
                                <img src={item.img} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.des}</p>
                                <span>{item.price}</span>
                            </div>
                        ))}
                    </>
                )}
            </ModalBody>    
            <ModalFooter>
                <button onClick={close} type="button" className="btn btn-primary">Đặt bàn</button>
            </ModalFooter>
        </Modal>

        </>
    )
}

export default BookTable;