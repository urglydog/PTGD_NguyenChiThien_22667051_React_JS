import { useEffect, useState } from "react";
import Item from "./Item";

export default function LeftMenu() {
    const [arr, setArr] = useState([]);
    const url = "https://67c8505e0acf98d07085fc8a.mockapi.io/Item";

    useEffect(() => {
        fetch(url)
            .then((r) => r.json()) // Sửa lỗi .json() 
            .then((data) => {
                setArr(data);
            });
    }, []); // Thêm [] để tránh gọi API liên tục

    return (
        <ul>
            {arr.map((item, index) => (
                <li key={index}>
                    <Item img={item.img} decribe={item.descibe} minute={item.minute} />
                </li>
            ))}
        </ul>
    );
}
