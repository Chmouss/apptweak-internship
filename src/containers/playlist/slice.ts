import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpotifyPlaylist } from "../../types";

export interface PlaylistState {
    playlists?: SpotifyPlaylist,
    selectedPlaylist?: string
}

const initialState: PlaylistState = {
    playlists: undefined,
    selectedPlaylist: undefined
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setMePlaylists(state, action: PayloadAction<SpotifyPlaylist>) {
      state.playlists = action.payload;
    }, 
    setSelectedPlaylist(state, action: PayloadAction<string | undefined>) {
      state.selectedPlaylist = action.payload;
    },
  }, 
});

export const { setMePlaylists, setSelectedPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;