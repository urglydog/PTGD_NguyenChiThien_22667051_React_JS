import {Link} from "react-router-dom"
import path from "../../constants/path"
import BookTable from "../BookTable/BookTable";
import "../Header/Header.css"
function Header(){
    return (
        <>
            <div className="header">
                <h1>Nhà hàng ABC</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={path.home}>Trang chủ</Link>
                        </li>
                        <li>
                            <Link to={path.thucdon}>Thực đơn</Link>
                        </li>
                        <li>
                            <Link to={path.lienhe}>Liên hệ</Link>
                        </li>
                    </ul>
                    <BookTable></BookTable>
                </nav>
            </div>
        </>
    )
}

export default Header;