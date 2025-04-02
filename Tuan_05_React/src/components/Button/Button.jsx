const Button = ({img,text,color}) =>{
    return(
        <>
        <button style={{display:"flex",backgroundColor:"#FFEFF8", padding:"10px", borderRadius:"30px",color: color}}><img style={{marginRight:"20px"}} src={img} alt="picture" />{text}</button>
        </>
    );
};

export default Button;