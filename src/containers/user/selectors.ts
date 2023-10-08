import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";

const selectSelf = (state: RootState) => state.user;

export const userSelectors = {
  getMe: createSelector(selectSelf, (user) => user.me),
};