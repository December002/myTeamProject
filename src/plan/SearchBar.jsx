import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import "./css/SearchBar.css"



export default function SearchBar() {
  return (
    <Paper
        className='searchContainer'
        component="form"
    >
        <InputBase
            className='searchInput'
            placeholder="검색할 관광지 입력"
            inputProps={{ 'aria-label': ''}}
        />
        <IconButton type="button"  aria-label="search">
            <SearchIcon />
        </IconButton>
    </Paper>
  );
}