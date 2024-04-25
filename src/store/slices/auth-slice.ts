import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "counter",
  initialState: {
    user: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthUser } = authSlice.actions;

export default authSlice.reducer;
