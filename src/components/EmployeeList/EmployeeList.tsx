import people_icon from '../res/peopleicon.svg'
import "./EmployeeList.css"

const EmployeeList = () => {
  return (
    <>
      <div className="empHeader">
        <div className="pizdablyat">
          <div className="peopleicon">
            <img src={people_icon} alt="" />
          </div>
          <div className="empPanel">
            <div className="Word">Участники</div>
            <div className="empNumber">127 людей</div>  
          </div>
        </div>
        <div className="journal">Журнал событий</div>
      </div>
    </>
  )
}

export default EmployeeList
