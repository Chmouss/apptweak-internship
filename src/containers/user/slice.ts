import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";


export interface UserState {
  me?: User;
}

const initialState: UserState = {
  me: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMe(state, action: PayloadAction<User>) {
      state.me = action.payload;
    },
  },
});

export const { setMe } = userSlice.actions;

export default userSlice.reducer;
