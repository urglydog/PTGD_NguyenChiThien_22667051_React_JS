// src/features/event/EventManager.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, deleteEvent, editEvent } from './eventSlice';

export default function EventManager() {
  const [title, setTitle] = useState('');
  const [editingEvent, setEditingEvent] = useState(null); // Trạng thái sự kiện đang chỉnh sửa
  const events = useSelector((state) => state.event.events);
  const dispatch = useDispatch();

  const handleAddOrEditEvent = () => {
    if (editingEvent) {
      // Nếu đang chỉnh sửa, gọi action editEvent
      dispatch(editEvent({ id: editingEvent.id, title }));
      setEditingEvent(null); // Reset chế độ chỉnh sửa
    } else {
      // Nếu không, thêm sự kiện mới
      dispatch(addEvent({ id: Date.now(), title }));
    }
    setTitle(''); // Reset input
  };

  const handleEdit = (event) => {
    setEditingEvent(event); // Chọn sự kiện để chỉnh sửa
    setTitle(event.title); // Điền tiêu đề của sự kiện vào input
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Quản lý sự kiện</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tên sự kiện"
        className="border p-2 mr-2"
      />
      <button
        onClick={handleAddOrEditEvent}
        className="btn"
      >
        {editingEvent ? 'Cập nhật' : 'Thêm'}
      </button>

      <ul className="mt-4 space-y-2">
        {events.map(event => (
          <li key={event.id} className="border p-2 flex justify-between">
            {event.title}
            <div className="space-x-2">
              <button onClick={() => handleEdit(event)}>Chỉnh sửa</button>
              <button onClick={() => dispatch(deleteEvent(event.id))}>Xoá</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
