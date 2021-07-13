import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type Login = {
    isAdmin: boolean;
    password: string;
}

const initialState = {
  isAdmin: false,
  password: "AdminIsMe"
};

// json-serverからデータを取得
export const getLogin = createAsyncThunk(
    'login/getLogin',
    async () => {
      const response = await axios.get("http://localhost:3001/login");
      // return {responseItems: response};
      return response.data;
    }
);

// isAdminの状態をTrueに
// export const loginAdmin = createAsyncThunk("login/loginAdmin", async (value: Login) => {
//     const response = await axios.patch("http://localhost:3001/login", {isAdmin: true});
//     return response.data;
// })
// isAdminの状態をfalseに
// export const logoutAdmin = createAsyncThunk("login/logoutAdmin", async (value: Login) => {
//     const response = await axios.patch("http://localhost:3001/login", {isAdmin: false});
//     return response.data;
// })
// isAdminの値を更新
export const changeAdmin = createAsyncThunk("login/changeAdmin", async (value: Login) => {
    const response = await axios.patch("http://localhost:3001/login", value);
    return response.data;
})


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getLogin.fulfilled, (state, action) => {
        state = action.payload
      })
    // .addCase(loginAdmin.fulfilled, (state, action) => {
    //     state = action.payload
    // })
    // .addCase(logoutAdmin.fulfilled, (state, action) => {
    //     state = action.payload
    // })
    .addCase(changeAdmin.fulfilled, (state, action) => {
        // state = action.payload
        return {
            ...state,
            isAdmin: action.payload
        }
    })
  },
});

export const {} = loginSlice.actions;

export const selectLogin = (state: any) => state.login;

export default loginSlice.reducer;
