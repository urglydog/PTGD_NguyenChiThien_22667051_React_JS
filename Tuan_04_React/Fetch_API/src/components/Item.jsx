import '../css/Item.css';
export default function Item(img,decribe,minute){
    return(
        <div className="container">
            <img  src={img} alt="img"/>
            <span className="decribe">{decribe}</span>
            <span className="minute">{minute}</span>
        </div>
    )
}