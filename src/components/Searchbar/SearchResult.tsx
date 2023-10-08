import { ListItem, Typography } from "@mui/material";
import { SpotifyTrack } from "../../types";

interface SearchedTrackProps {
    searchedTracks: SpotifyTrack;
}

export const SearchResult: React.FC<SearchedTrackProps> = ({ searchedTracks }) => {

    //display matching search track results
    return (
        <ListItem>
            <Typography>
                {searchedTracks.name}
            </Typography>
        </ListItem>
    );
}

export default SearchResult;