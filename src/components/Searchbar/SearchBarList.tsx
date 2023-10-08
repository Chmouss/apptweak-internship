import { useDispatch, useSelector } from "react-redux";
import { searchBarSelectors } from "../../containers/searchBar/selectors";
import SearchResult from "./SearchResult";
import { authSelectors } from "../../containers/auth/selectors";
import { useGetSearchTrackResultQuery } from "../../api/apiSlice";
import { useEffect } from "react";
import { setSearchResults } from "../../containers/searchBar/slice";
import { Paper } from "@mui/material";

interface SearchBarListProps {
  searchTerm: string;
}

const SearchBarList: React.FC<SearchBarListProps> = ({ searchTerm }) => {

  const dispatch = useDispatch();
  const accessToken = useSelector(authSelectors.getAccessToken);

  const searchResults = useSelector(searchBarSelectors.getSearchResults);

  //fetch search results
  const { data: searchedTracks } = useGetSearchTrackResultQuery(
    searchTerm ?? "",
    {
      skip: !accessToken,
    }
  );

  //set the search state whenever the input is modified
  useEffect(() => {
    if (searchTerm && searchedTracks) dispatch(setSearchResults(searchedTracks));
    // eslint-disable-next-line
  }, [dispatch, searchedTracks]);

  return (
    <Paper>
      {searchResults?.map((searchTrack) => (
        <SearchResult searchedTracks={searchTrack} key={searchTrack.id} />
      ))}
    </Paper>
  );
}

export default SearchBarList;