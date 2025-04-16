// tạo đầu tiên
import {createSlice} from "@reduxjs/toolkit"
export const counterSlice = createSlice({
  name: 'counter', // tên của slice
  initialState: { //state chung
    value: 0,
  },
  reducers: { // các hàm sử lý chung
    increment: (state) => {
      // Redux Toolkit cho phép bạn "mutate" state trực tiếp trong reducers
      // vì nó sử dụng Immer ở bên trong
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators được tạo tự động cho mỗi hàm reducer
export const { increment, decrement } = counterSlice.actions;

// Export reducer để cấu hình store
export default counterSlice.reducer;