import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";

const selectSelf = (state: RootState) => state.playlists;

export const playlistSelectors = {
  getMePlaylists: createSelector(selectSelf, (playlists) => playlists.playlists),
  getSelectedPlaylist: createSelector(selectSelf, (playlists) => playlists.selectedPlaylist),
};