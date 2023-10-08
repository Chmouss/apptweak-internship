import { useDispatch, useSelector } from "react-redux";
import { playlistSelectors } from "../../containers/playlist/selectors";
import { useEffect } from "react";
import { setSelectedPlaylist } from "../../containers/playlist/slice";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

const SelectPlaylist: React.FC = () => {
  const dispatch = useDispatch();

  //set href from the selected playlist when the user selects one
  const handleDropdownClick = (event:SelectChangeEvent<string>) => {
    dispatch(setSelectedPlaylist(event.target.value));
  };

  //get all playlists from current user
  const playlists = useSelector(playlistSelectors.getMePlaylists);

  //whenever playlists changes, the callback is triggered && we set the new selected playlist
  useEffect(() => {
    dispatch(setSelectedPlaylist(playlists?.items[0].href));
  }, [playlists, dispatch]);

  const playlist = useSelector(playlistSelectors.getSelectedPlaylist);
  
  if (!playlists) {
    return <div>no playlist</div>;
  }

  //display all playlists && infos
  return (
    <div>
      <Select
        value={playlist ?? ''}
        name="playlists"
        id="playlist-select"
        onChange={handleDropdownClick}
      >
        {playlists.items.map((playlist) => {
          return (
            <MenuItem value={playlist.href} key={playlist.id}>
              {" "}
              {playlist.name}{" "}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectPlaylist;
