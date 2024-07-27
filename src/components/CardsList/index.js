// import React, { useState, setState }  from "react";
import "../styles.css";
// import SearchBar from "../SearchBar";
import LinearProgress from '@mui/material/LinearProgress';
// import { $filteredProjects } from "../../store/projectsStore";
import { useUnit } from "effector-react";
// import Header from "../Header/Header";
// import { combine, createEffect, createEvent, createStore } from "effector";
import { $displayedCards, changeSortMethodDt, changeSortMethodPr } from "../../store/ButtonAndCardStore"
import arrowdown_icon from '../res/arrow-down.svg'
import razdelpalka_icon from '../res/razdel-palka.svg'

document.body.style = 'background: white;';

const CardList = () => {

  const cards = useUnit($displayedCards)

  return (
    <>
      <div className="CardList">
        {cards.map((card) => (
          <div className="Card">
            <img className="personPic" src="" alt="" />
            <div className="Card_NameAndPercentage">
              <div className="Card_Name">{card.personName}</div>
              <div className="Card_ProgressAndDeadline">
                <div className="Card_ProgressPercentage">
                  {card.personStatus}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="showMore">
        <div className="showMoreText">Показать ещё</div>
        <img src={arrowdown_icon} alt="" />
      </div>
      <img src={razdelpalka_icon} alt="" />
    </>
  )
}

export default CardList;

// const sortByPriority = () => {
//   const newArr = projects.sort((a, b))
//   console.log(projects);
//   projects.sort();
//   console.log(projects);
//   return projects;
// }
