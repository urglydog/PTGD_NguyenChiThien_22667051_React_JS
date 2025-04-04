import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import '../Datatable/DataTable.css'
import report from '../../img/File text 1.png?url'
import iport from '../../img/Download.png?url'
import eport from '../../img/Move up.png?url'

function OrdersTable() {
    const tableRef = useRef(null);
    const [arr, setArr] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [editData, setEditData] = useState({});

    // Lấy dữ liệu khách hàng từ API
    useEffect(() => {
        fetch("http://localhost:3002/customers") // jsonserver
            .then((item) => item.json())
            .then(json => setArr(json));
    }, []);

    // Khởi tạo DataTable khi có dữ liệu
    useEffect(() => {
        if (arr.length === 0) return; // nếu không có dữ liệu thì không chạy
        const table = $(tableRef.current).DataTable({
            pageLength: 6, // Chỉ hiển thị 6 dòng mỗi trang
            lengthChange: false, // Ẩn "Show entries"
            searching: false, // Ẩn ô Search
            language: {
                info: "_TOTAL_ results"
            }
        });

        return () => {
            table.destroy(); // Cleanup DataTable khi component unmount
        };
    }, [arr]);

    const handleSave = async () => {
        // Kiểm tra lại dữ liệu trước khi lưu
        if (!editData.order_date) {
            alert("Please select a valid date.");
            return;
        }
    
        const updatedData = {
            ...editData,
            order_value: parseFloat(editData.order_value), // Chuyển đổi order_value thành số
        };
    
        if (editData.order_date !== selectedCustomer.order_date) {
            updatedData.order_date = convertToDisplayFormat(editData.order_date); // Chuyển lại ngày về định dạng dd/mm/yyyy
        } else {
            updatedData.order_date = selectedCustomer.order_date; // Nếu không thay đổi, giữ nguyên giá trị cũ
        }
    
        // Gửi yêu cầu PUT nếu có thay đổi
        await fetch(`http://localhost:3002/customers/${selectedCustomer.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        });
    
        // Cập nhật lại chỉ dòng đã thay đổi
        setArr((prevArr) =>
            prevArr.map((customer) =>
                customer.id === selectedCustomer.id ? updatedData : customer
            )
        );
    
        // Đóng modal
        setSelectedCustomer(null);
    };
    

    // Chuyển đổi ngày từ dd/mm/yyyy thành yyyy-mm-dd
    const convertToDateInputFormat = (datestr) => {
        const [day, month, year] = datestr.split('/');
        return `${year}-${month}-${day}`; // Chuyển đổi thành yyyy-mm-dd
    };

    // Chuyển đổi ngày từ yyyy-mm-dd thành dd/mm/yyyy để hiển thị
    const convertToDisplayFormat = (datestr) => {
        const [year, month, day] = datestr.split('-');
        return `${day}/${month}/${year}`; // Chuyển đổi lại thành dd/mm/yyyy
    };

    return (
        <div className="table-container">
            {/* Modal */}
            {selectedCustomer && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Edit Customer</h3>
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
                            <input 
                                type="date" 
                                value={convertToDateInputFormat(editData.order_date)} 
                                onChange={(e) => setEditData({ ...editData, order_date: e.target.value})} // Chỉ sử dụng e.target.value mà không cần format lại
                            />
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
                            <button onClick={() => setSelectedCustomer(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="table_option">
                <h2 className="table-title"><img src={report} alt="" />Detailed report</h2>
                <div className="two_btn">
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
                                <button className="edit-btn" onClick={() => {
                                    setSelectedCustomer(customer);
                                    setEditData(customer);
                                }}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrdersTable;
