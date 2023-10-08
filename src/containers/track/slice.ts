import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpotifyCompletePlaylist } from "../../types";

export interface PlaylistTracksState {
  completePlaylist?: SpotifyCompletePlaylist;
}

const initialState: PlaylistTracksState = {
  completePlaylist: undefined,
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setCompletePlaylist(state, action: PayloadAction<SpotifyCompletePlaylist>) {
      state.completePlaylist = action.payload;
    },
  },
});

export const { setCompletePlaylist } = trackSlice.actions;

export default trackSlice.reducer;
