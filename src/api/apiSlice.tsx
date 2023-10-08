import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
import {
  SpotifyPlaylist,
  SpotifyCompletePlaylist,
  //SpotifyPlaylistTrack,
  User,
  SpotifySearchedTracks,
} from "../types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authentication.accessToken;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => ({
        url: "/me",
        method: "GET",
      }),
    }),
    getPlaylists: builder.query<SpotifyPlaylist, void>({
      query: () => ({
        url: "/me/playlists",
        method: "GET",
      }),
    }),
    getPlaylistTracks: builder.query<SpotifyCompletePlaylist, string>({
      query: (playlistRef) => ({
        url: `${playlistRef}`,
        method: "GET",
      }),
    }),
    getSearchTrackResult: builder.query<SpotifySearchedTracks, string>({
      query: (search) => ({
        url: `/search?q=${search}&type=track`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response.tracks.items;
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetPlaylistsQuery,
  useGetPlaylistTracksQuery,
  useGetSearchTrackResultQuery,
} = apiSlice;

export default apiSlice.reducer;
