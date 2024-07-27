import React from "react"
import "./Header.css"
import LinearProgress from '@mui/material/LinearProgress';
import palka_icon from '../res/palka.svg'
import krivayapalka_icon from '../res/krivayapalka.svg'
import editpencil_icon from '../res/editpencil.svg'

const Header: React.FC = () => {

  return (
    <>
      <div className="Header">
        <div className="StepNameProgrDeadline">
          <div className="Step_NameAndPic">
            <div className="Pic"></div>
            <div className="Step_name">
              Название этапа
            </div>
          </div>
          <div className="ProgrDeadline">
            <div className="ProgrPercentage">54%</div>
            <div className="ProgressBar">
            <LinearProgress variant="determinate" value={54} color="primary" 
                    sx={{height: 3,
                      width: 100,
                      backgroundColor:'#B1B1B1', 
                      borderRadius: 22, 
                      '& .MuiLinearProgress-bar': {
                        // backgroundColor: '#636363',
                        backgroundColor: 'black',
                      },
                  }} />
            </div>
            <div className="DeadlineAndDate">
              <div className="DeadlineWord">Deadline</div>

              <div className="palkablyat">
                <img src={palka_icon} alt=""/>
              </div>

              <div className="DeadlineDate">24.12.2024</div>
            </div>
          </div>
        </div>
        <div className="TaskNameAndHuynya">
          <div className="TaskName">

            <div className="krivayapalkablyat">
              <img src={krivayapalka_icon} alt=""/>
            </div>

            <div className="Name">Название задачи_01</div>
          </div>
          <div className="editpencil">
            <img src={editpencil_icon} alt=""/>
          </div>
        </div>
      </div>
    </>
  )

}

export default Header