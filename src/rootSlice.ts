import { createSlice } from "@reduxjs/toolkit"
import { InitialStateTypes } from "./StoreTypes"

const initialState: InitialStateTypes = {
  email: "",
  tell: "",
  name: "",
  nickname: "",
  sername: "",
  sex: "",
  advantages: [],
  checkbox: {
    one: "",
    two: "",
    tree: "",
  },
  radio: "",
  textarea: "",
}

const rootSlice = createSlice({
  name: "root",
  initialState,
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
    setAdvantages: (state, action) => {
      state.advantages = action.payload
    },
    setCheckbox: (state, action) => {
      state.checkbox = action.payload
    },
    setRadio: (state, action) => {
      state.radio = action.payload
    },
    setTextArea: (state, action) => {
      state.textarea = action.payload
    },
  },
})

export const reducer = rootSlice.reducer
export const {
  setEmail,
  setTell,
  setName,
  setNickName,
  setSerName,
  setSex,
  setAdvantages,
  setCheckbox,
  setRadio,
  setTextArea,
} = rootSlice.actions
