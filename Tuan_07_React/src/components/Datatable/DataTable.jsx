import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import '../Datatable/DataTable.css';
import report from '../../img/File text 1.png?url';
import iport from '../../img/Download.png?url';
import eport from '../../img/Move up.png?url';

function OrdersTable() {
    const tableRef = useRef(null);
    const [arr, setArr] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [editData, setEditData] = useState({});
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3002/customers")
            .then((res) => res.json())
            .then((json) => setArr(json));
    }, []);

    useEffect(() => {
        if (arr.length === 0) return;
        const table = $(tableRef.current).DataTable({
            pageLength: 6,
            lengthChange: false,
            searching: false,
            language: { info: "_TOTAL_ results" },
            columnDefs: [
                { width: "150px", targets: 5 } // Định nghĩa độ rộng cột Status
            ]
        });
        return () => table.destroy();
    }, [arr]);

    const handleSave = async () => {
        if (!editData.name || !editData.company || !editData.order_value || !editData.order_date) {
            alert("Please fill all fields.");
            return;
        }
        const newCustomer = {
            ...editData,
            order_value: parseFloat(editData.order_value),
            order_date: convertToDisplayFormat(editData.order_date),
        };

        if (isAdding) {
            const response = await fetch("http://localhost:3002/customers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCustomer),
            });
            const addedCustomer = await response.json();
            setArr([...arr, addedCustomer]);
        } else {
            await fetch(`http://localhost:3002/customers/${selectedCustomer.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCustomer),
            });
            setArr(arr.map(customer => customer.id === selectedCustomer.id ? newCustomer : customer));
        }

        setIsAdding(false);
        setSelectedCustomer(null);
    };

    const convertToDateInputFormat = (datestr) => {
        const [day, month, year] = datestr.split('/');
        return `${year}-${month}-${day}`;
    };

    const convertToDisplayFormat = (datestr) => {
        const [year, month, day] = datestr.split('-');
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="table-container">
            {(selectedCustomer || isAdding) && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{isAdding ? "Add New Customer" : "Edit Customer"}</h3>
                        <label>Name:
                            <input value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} />
                        </label>
                        <label>Company:
                            <input value={editData.company} onChange={(e) => setEditData({ ...editData, company: e.target.value })} />
                        </label>
                        <label>Order Value:
                            <input type="number" value={editData.order_value} onChange={(e) => setEditData({ ...editData, order_value: e.target.value })} />
                        </label>
                        <label>Order Date:
                            <input type="date" value={convertToDateInputFormat(editData.order_date)} onChange={(e) => setEditData({ ...editData, order_date: e.target.value })} />
                        </label>
                        <label>Status:
                            <select value={editData.status} onChange={(e) => setEditData({ ...editData, status: e.target.value })}>
                                <option value="New">New</option>
                                <option value="Completed">Completed</option>
                                <option value="In-progress">In-progress</option>
                            </select>
                        </label>
                        <div className="modal-buttons">
                            <button onClick={handleSave}>Save</button>
                            <button onClick={() => { setSelectedCustomer(null); setIsAdding(false); }}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="table_option">
                <h2 className="table-title"><img src={report} alt="" />Detailed report</h2>
                <div className="two_btn">
                    <button type='button' className='btn btn_add' onClick={() => {
                        setIsAdding(true);
                        setEditData({ name: "", company: "", order_value: "", order_date: "", status: "New" });
                        setSelectedCustomer(null);
                    }}>
                        <img src="../../icons/plus-square.svg" alt="" /> Add
                    </button>
                    <button type='button' className='btn'><img src={iport} alt="" /> Import</button>
                    <button type='button' className='btn'><img src={eport} alt="" /> Export</button>
                </div>
            </div>

            <table ref={tableRef} className="display">
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer Name</th>
                        <th>Company</th>
                        <th>Order Value</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((customer, index) => (
                        <tr key={index}>
                            <td><input type="checkbox" /></td>
                            <td>
                                <div className="customer">
                                    <img src={`https://i.pravatar.cc/40?img=${index}`} alt={customer.name} className="avatar" />
                                    <span>{customer.name}</span>
                                </div>
                            </td>
                            <td>{customer.company}</td>
                            <td>${customer.order_value}</td>
                            <td>{customer.order_date}</td>
                            <td>
                                <span className={`status ${customer.status.toLowerCase()}`}>
                                    {customer.status}
                                </span>
                            </td>
                            <td>
                                <button className="edit-btn"
                                    onClick={() => {
                                        setSelectedCustomer(customer);
                                        setEditData(customer);
                                    }}
                                >Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrdersTable;
