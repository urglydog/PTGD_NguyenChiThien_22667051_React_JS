import { useEffect, useState, useMemo } from 'react';
import dashboardImg from '../../img/Squares four 1.png';
import '../OverView/OverView.css';
import Statistic from '../Statistic/Statistic';

import turnoverImg from '../../img/Button 1509.png?url';
import profitImg from '../../img/Button 1529.png?url';
import new_customerImg from '../../img/Button 1530.png?url';

function OverView() {
    const [arr, setArr] = useState([]);

    // Lấy dữ liệu khách hàng từ API
    useEffect(() => {
        fetch("http://localhost:3002/customers") // jsonserver
            .then((item) => item.json())
            .then(json => setArr(json));
    }, []);

    // Tính tổng giá trị order_value
    const turnoverData = useMemo(() => {
        return arr.reduce((total, customer) => total + customer.order_value, 0);
    }, [arr]);

    // Tính profit bằng 15% của turnover
    const profitData = useMemo(() => {
        return (turnoverData * 0.15).toFixed(2);
    }, [turnoverData]);

    // Số lượng khách hàng mới (số dòng trong data)
    const newCustomerData = useMemo(() => {
        return arr.length;
    }, [arr]);

    return (
        <div className="overview_container">
            <div className="label">
                <img src={dashboardImg} alt="dashboard" />
                <h4>Overview</h4>
            </div>
            <div className="thongke">
                {/* <Statistic label="Turnover" img={turnoverImg} data={`$${turnoverData}`} percent="5.39" className="turnover"/>
                <Statistic label="Profit" img={profitImg} data={`$${profitData}`} percent="4.25" className="profit" />
                <Statistic label="New customer" img={new_customerImg} data={newCustomerData} percent="6.84" className="new_customer" /> */}
            </div>
        </div>
    );
}

export default OverView;
