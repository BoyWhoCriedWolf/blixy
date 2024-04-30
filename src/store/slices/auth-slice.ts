import { createSlice } from "@reduxjs/toolkit";
import { AuthUser } from "services/types/user.types";

// Define a type for the slice state
interface AuthState {
  user?: AuthUser;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthUser } = authSlice.actions;

export default authSlice.reducer;
