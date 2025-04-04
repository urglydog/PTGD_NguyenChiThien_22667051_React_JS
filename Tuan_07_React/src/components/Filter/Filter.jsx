import '../Filter/Filter.css'
import search from '../../img/Search.png?url'
function Filter({}){
    return (
        <div className="filter" style={{display:"flex", backgroundColor:"#F3F4F6", padding:"10px", borderRadius:"30px"}}>
            <img src={search} alt="" />
            <input style={{border: "none", backgroundColor:"#F3F4F6", color:"black" }} type="text" placeholder='Search...' />
        </div>
    );
}

export default Filter;