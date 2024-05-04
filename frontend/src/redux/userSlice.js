import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  image: "",
  lastName: "",
  _id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data);
      state.user = action.payload;
      state._id = action.payload.data._id;
      state.firstName = action.payload.data.firstName;
      state.lastName = action.payload.data.lastName;
      state.email = action.payload.data.email;
      state.image = action.payload.data.image;
      return{
        ...state,
        ...action.payload,
      };
    },
    logoutRedux: (state, action) => {
      state.user = "";
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.image = "";
      return{
        ...initialState,
      };
    },
  },
});

export const { loginRedux ,logoutRedux } = userSlice.actions;

export default userSlice.reducer;
