import React from "react"
import { Paper, IconButton, InputBase } from "@mui/material";
import search_icon from '../res/search-lg.svg'
import { searchCards } from "../../store/ButtonAndCardStore";
import { useCallback } from "react";

const SearchBar1: React.FC = () => {

  const onSearch = useCallback((e:any) => searchCards(e.currentTarget.value), [])

  return (
    <div className='search-container'>
      <Paper
        component="form"
        sx={{ boxShadow: 0, p: '0px 2px', display: 'flex', alignItems: 'center', width: 460, height: 48, backgroundColor: '#F7F8F9', marginLeft: '20px' }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <img src={ search_icon } alt=''/>
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal', fontSize: 16 }}
          placeholder="Поиск ответственного по имени/id"
          // value={searchTerm}
          onChange={onSearch}
        />
      </Paper>
      </div>
  )
}

export default SearchBar1
