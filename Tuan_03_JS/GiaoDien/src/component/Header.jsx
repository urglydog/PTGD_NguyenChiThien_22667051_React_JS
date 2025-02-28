import Button from "./Button"
import Filter from "./filter"
const Header = ({ img, filterProps, navigator, buttonProps, linkImg }) => {
    return (
        <>
            <div className="nav" style={{ display: "flex", width: "100%", height: "50px", justifyContent: "space-between",alignItems:"center" }}>
                <img src={img} alt="logo" style={{ height: "100%" }} />
                <Filter {...filterProps}/>

                <ul style={{ display: "flex", height: "100%", padding: "5px", alignItems: "center" }}>
                    {navigator.map((item, index) => (
                        <a key={index} href="">
                            <li  style={{ cursor: "pointer", display:"inline-block", marginLeft:"20px" }}>{item}</li>
                        </a>
                    ))}
                </ul>
                <Button {...buttonProps} />
                <a href="#"><img style={{ border: "50%" }} src={linkImg} alt="Profile" /></a>
            </div>
        </>
    )
}

export default Header;