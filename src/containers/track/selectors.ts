import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";

const selectSelf = (state: RootState) => state.track;

export const trackSelectors = {
  getCompletePlaylist: createSelector(
    selectSelf,
    (track) => track.completePlaylist
  ),
};
