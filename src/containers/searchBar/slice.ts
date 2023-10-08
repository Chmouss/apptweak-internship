import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpotifySearchedTracks } from "../../types";

export interface SearchBarState {
  searchBar?: SpotifySearchedTracks;
}

const initialState: SearchBarState = {
  searchBar: undefined,
};

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<SpotifySearchedTracks>) {
      state.searchBar = action.payload;
    },
  },
});

export const { setSearchResults } = searchBarSlice.actions;

export default searchBarSlice.reducer;
