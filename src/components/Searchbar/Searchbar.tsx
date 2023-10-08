import { CSSProperties, ChangeEvent, useState } from 'react';
import SearchBarList from './SearchBarList';
import { TextField } from '@mui/material';

const SearchBar = () => {

  //searchBar text rendering
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const [isFocus, setIsFocus] = useState<boolean>(false);

  const style:CSSProperties={position:'absolute', height:300, backgroundColor:'white', width:300, overflowY:'scroll', zIndex:1000};

  //if the searchTerm is greater or equals to 3 characters, start fetching the tracks (to avoid spamming API calls)
  return (
    <div>
      <TextField
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      {isFocus && (searchTerm.length >= 3  && <div style={style}>
        <SearchBarList searchTerm={searchTerm}/>
      </div>
      )}
    </div>
  );
}

export default SearchBar;