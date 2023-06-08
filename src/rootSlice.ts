import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
  name: "root",
  initialState: {
    email: "qwe@mail.ru",
    tell: 79999996677,
    name: "name",
    nickname: "nickname",
    sername: "sername",
    sex: "sex",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setTell: (state, action) => {
      state.tell = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    setNickName: (state, action) => {
      state.nickname = action.payload
    },
    setSerName: (state, action) => {
      state.sername = action.payload
    },
    setSex: (state, action) => {
      state.sex = action.payload
    },
  },
})

export const reducer = rootSlice.reducer
export const { setEmail, setTell, setName, setNickName, setSerName, setSex } =
  rootSlice.actions
