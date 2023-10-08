import React, { useState } from "react";
import { useSelector } from "react-redux";
import { trackSelectors } from "../../containers/track/selectors";
import { Track } from "./Track";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";

const TrackList: React.FC = () => {
  //get selected playlist
  const playlist = useSelector(trackSelectors.getCompletePlaylist);

  //"converts" part of tracks data from playlist in an array 
  const playlistTracks = playlist?.tracks.items || [];

  //state to manage sorting
  const [orderBy, setOrderBy] = useState<string>("name");
  const [order, setOrder] = useState<"asc" | "desc">("asc");


  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };


  const sortedTracks = [...playlistTracks].sort((a, b) => {
    let comparison = 0;

    if (orderBy === "name") {
      comparison = (a.track.name || "").localeCompare(b.track.name || "");
    } else if (orderBy === "artists") {
      comparison = (
        (a.track?.album.artists[0]?.name || "").localeCompare(b.track?.album.artists[0]?.name || "")
      );
    } else if (orderBy === "total_tracks") {
      comparison = a.track.album.total_tracks - b.track.album.total_tracks;
    } else if (orderBy === "release_date") {
      comparison = (a.track.album.release_date || "").localeCompare(b.track.album.release_date || "");
    }

    return order === "asc" ? comparison : -comparison;
  });

  if (sortedTracks.length === 0) {
    return <div>tracks empty</div>;
  }

  //table with clickable headers displaying the tracks from the current selected playlist, displaying infos, ...
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 40, zIndex: 500 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "name"}
                direction={order}
                onClick={() => handleSort("name")}
              >
                <Typography variant="subtitle1">Nom</Typography>
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "artists"}
                direction={order}
                onClick={() => handleSort("artists")}
              >
                <Typography variant="subtitle1">Artistes</Typography>
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "total_tracks"}
                direction={order}
                onClick={() => handleSort("total_tracks")}
              >
                <Typography variant="subtitle1">Nombre de pistes</Typography>
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "release_date"}
                direction={order}
                onClick={() => handleSort("release_date")}
              >
                <Typography variant="subtitle1">Date de sortie</Typography>
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedTracks.map((playlistTrack, index) => (
            <Track track={playlistTrack.track} key={index} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TrackList;