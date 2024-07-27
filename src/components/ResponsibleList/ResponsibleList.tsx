import React from "react"
import "./ResponsibleList.css"
import people_icon from '../res/peopleicon.svg'
import razdelpalka_icon from '../res/razdel-palka.svg'

const ResponsibleList: React.FC = () => {
  return (
    <>
      <div className="responsible">
        <div className="respHeader">
          <div className="peopleicon">
            <img src={people_icon} alt="" />
          </div>
          <div className="Word">Ответственные</div>
          <div className="journal">Журнал событий</div>
        </div>
        <div className="respList">
          <div className="respPerson">
            <img className="personPic" src="" alt="" />
            <div className="personNameAndPlace">
              <div className="personName">Дмитрий Сергеевич Иванов</div>
              <div className="personPlace">Admin</div>
            </div>
          </div>

          <div className="respPerson">
            <img className="personPic" src="" alt="" />
            <div className="personNameAndPlace">
              <div className="personName">Дмитрий Сергеевич Иванов</div>
              <div className="personPlace">Admin</div>
            </div>
          </div>
        </div>
        <img src={razdelpalka_icon} alt="" />
      </div>
    </>
  )
}

export default ResponsibleList