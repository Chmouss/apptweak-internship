import { TableCell, TableRow, Typography } from "@mui/material";
import { SpotifyTrack } from "../../types";

interface TrackProps {
  track: SpotifyTrack;
}

export const Track: React.FC<TrackProps> = ({ track }) => {

  //display single track elements && the infos 
  return (
    <TableRow>
      <TableCell style={{ height: 40 }}>
        <img
          style={{ width: 60, height: 60 }}
          src={track.album.images[0].url}
          alt="album"
        />
      </TableCell>
      <TableCell>
        <Typography>
          {track.name}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography>
          {track?.album.artists.map((artist) => artist.name ).join(', ')  }
        </Typography>
      </TableCell>
      <TableCell>
        <Typography>
          {track.album.total_tracks}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography>
          {track.album.release_date}
        </Typography>
      </TableCell>
    </TableRow>
  );
};
