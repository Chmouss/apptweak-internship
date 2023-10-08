import { Button, Typography } from "@mui/material";
import { useState } from "react";


interface AddPlaylistProps {
  onCreatePlaylist: (name: string) => void;
}

const AddPLaylist = ({ onCreatePlaylist }: AddPlaylistProps) => {
  const [playlistName, setPlaylistName] = useState<string>("");

  //function not completely implemented
  // eslint-disable-next-line
  const handleCreatePlaylist = () => {
    if (playlistName.trim() !== "") {
      onCreatePlaylist(playlistName);
      setPlaylistName("");
    }
  };

  const handleOnClickOpenNewWindow = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <div>
      <Button onClick={handleOnClickOpenNewWindow} variant="outlined" >
        <Typography variant="button">
          Create new playlist
        </Typography>
      </Button>
    </div>
  );
};

export default AddPLaylist;
