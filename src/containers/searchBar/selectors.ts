import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";

const selectSelf = (state: RootState) => state.searchBar;

export const searchBarSelectors = {
  getSearchResults: createSelector(selectSelf, (searchBar) => searchBar.searchBar)
};