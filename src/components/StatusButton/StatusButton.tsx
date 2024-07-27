import { Icon } from "@mui/material"
import React from "react"
import { useState } from 'react';
import chevrondown_icon from '../res/chevron-down.svg'
import '../styles.css'
import { changeStatus } from "../../store/ButtonAndCardStore";


const StatusButton: React.FC = () => {

  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setFilterVisible(!filterVisible)
  };

  const handleStatusChange = (status: string) => {
    // setSelectedStatus(status)
    setFilterVisible(false)
    changeStatus(status)
  };

  return (
    <>
      <button className="filter-button" onClick={toggleFilterVisibility}>
        Роль
        <Icon> 
          <img src={ chevrondown_icon }/>
        </Icon>

        {filterVisible && (
          <div className='filter-container'>
            <div className='filter-item' onClick={() => handleStatusChange("Все")}>Все</div>
            <div className='filter-item' onClick={() => handleStatusChange("Раб")}>Раб</div>
            <div className='filter-item' onClick={() => handleStatusChange("Мастер")}>Мастер</div>
          </div>
        )}
      </button>
    </>
  )
}

export default StatusButton