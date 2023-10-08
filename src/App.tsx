import "./App.css";

import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authSelectors } from "./containers/auth/selectors";
import {
  useGetPlaylistTracksQuery,
  useGetPlaylistsQuery,
  useGetUserQuery,
} from "./api/apiSlice";

import SearchBar from "./components/Searchbar/Searchbar";
import { setMe } from "./containers/user/slice";
import { userSelectors } from "./containers/user/selectors";
import { setMePlaylists } from "./containers/playlist/slice";
import AddPLaylist from "./components/AddPlaylist/AddPlaylist";
import TrackList from "./components/Track/TrackList";
import SelectPlaylist from "./components/SelectPlaylist/SelectPlaylist";
import UserProfile from "./components/UserProfile/UserProfile";
import { playlistSelectors } from "./containers/playlist/selectors";
import { setCompletePlaylist } from "./containers/track/slice";
import logoSpotifyBlue from "./logoSpotifyBlue.png";
import { Grid } from "@mui/material";


const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const accessToken = useSelector(authSelectors.getAccessToken);

  //get user value
  const me = useSelector(userSelectors.getMe);

  //You can access user data and now fetch user's playlists
  const { data: user } = useGetUserQuery(undefined, {
    skip: !accessToken,
  });
  // if user not connected && user exists and is not null, set into user state
  if (!me && user) dispatch(setMe(user));

  //access && set user playlists in state
  const { data: playlists } = useGetPlaylistsQuery(undefined, {
    skip: !accessToken,
  });
  if (playlists) dispatch(setMePlaylists(playlists));

  const selectedPlaylistHref = useSelector(playlistSelectors.getSelectedPlaylist);

  //get user playlists from href of the selected playlist
  const { data: completePlaylist } = useGetPlaylistTracksQuery(
    selectedPlaylistHref ?? "",
    {
      skip: !accessToken,
    }
  );

  //whenever selected playlist changes, set the new state && fetch tracks of the new selected playlist
  useEffect(() => {
    if (completePlaylist) dispatch(setCompletePlaylist(completePlaylist));
  }, [completePlaylist, dispatch]);


  //display -> components, logo
  return (
    <div className="app">
      <img src={logoSpotifyBlue} alt="My Logo" style={{ width: '140px', height: '140px', position:'absolute', top: 35, left: 35 }}/>
      <UserProfile />
      <div className="actionMenu">

        <div style={{ display: "flex", justifyContent: 'space-between' }}>
          <Grid style={{ display: 'flex' }}>
            <SearchBar />
            <Grid style={{ marginLeft: 20 }}>
              <SelectPlaylist />
            </Grid>
          </Grid>
          <AddPLaylist
            onCreatePlaylist={function (name: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>

      </div>
      <TrackList />
      <br />
    </div>
  );
};

export default App;
