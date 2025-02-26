import { useState } from 'react'
import './App.css'

function App_tmp() {
    const [initialMoney, setInitialMoney] = useState(0);
    const [inputRate, setRate] = useState(0);
    const [expectedMoney, setExpectedMoney] = useState(0);
    const [data, setData] = useState([]);


    const tinhToan = () => {
        let money = parseFloat(initialMoney);
        let rate = parseFloat(inputRate) / 100;
        let exmoney = parseFloat(expectedMoney);
        let year = new Date().getFullYear();
        let data = [];

        if (isNaN(money) || isNaN(rate) || isNaN(exmoney) || money <= 0 || exmoney <= 0 || rate <= 0) {
            alert("Vui lòng nhập số hợp lệ");
            return;
        }

        while (money < exmoney) {
            let moneyAfterYear = money + money * rate;
            data.push({ year, money: money.toFixed(2), rate:  (rate.toFixed(2)*100) +"%", expectedmoney: moneyAfterYear.toFixed(2) });
            year++;
            money = moneyAfterYear;
        }
        setData(data);
    };
    return (
        <>
            <div className="contaiter">
                <h1>Invesment</h1>
                <label htmlFor="">Nhập số tiền ban đầu</label>
                <input type="numer"
                    value={initialMoney}
                    onChange={(e) => setInitialMoney(e.target.value)}
                />
                <label htmlFor="">Nhập lãi suất</label>
                <input type="numer"
                    value={inputRate}
                    onChange={(e) => setRate(e.target.value)} />
                <label htmlFor="">Nhập số tiền mong muốn</label>
                <input type="numer"
                    value={expectedMoney}
                    onChange={(e) => { setExpectedMoney(e.target.value) }}
                />
                <button onClick={tinhToan}>Tính toán</button>

                {data.length > 0 && (
                    <table className="my_table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Money</th>
                                <th>Rate</th>
                                <th>Money after year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.year}</td>
                                    <td>{row.money}</td>
                                    <td>{row.rate}</td>
                                    <td>{row.expectedmoney}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
export default App_tmp;