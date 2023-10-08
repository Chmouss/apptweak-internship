import { combineReducers } from "redux";

import authentication from "../containers/auth/slice";
import api from "../api/apiSlice";
import user from "../containers/user/slice";
import playlists from "../containers/playlist/slice";
import track from "../containers/track/slice";
import searchBar from "../containers/searchBar/slice";


//reducer est utilise pour les "interactions", cree le nouvel etat que l'on souhaite obtenir
//en combinant l'etat et l'action a faire sur l'etat
//"ensemble des interactions possibles sur l'etat"

const rootReducer = combineReducers({
  authentication,
  api,
  user,
  playlists,
  track,
  searchBar,
});

export default rootReducer;
