import calendar_icon from '../res/calendar.svg'
import "./Deadline.css"
import "../Header/Header.css"
import LinearProgress from '@mui/material/LinearProgress';

const Deadline = () => {
  return (
    <>
      <div className="DeadlineHeader">
        <div className="DeadlineInnerHeader">
          <img src={calendar_icon} alt="" />
          <div className="DeadlineWord">
            Дедлайн
          </div>
        </div>
        <div className="GoToCalendar">
          Перейти в календарь
        </div>
      </div>

      <div className="DeadlineProgress">
        <div className="DeadlineProgressHeader">
          <div className="DeadlineWhatLeft">
            <div className="bigNumber">6</div>
            <div className="DaysLeft">Дней осталось</div>
          </div>
        </div>
        <div className="ProgrDeadline">
          <div className="ProgrPercentage">54%</div>
          <div className="ProgressBar">
          <LinearProgress variant="determinate" value={54} color="primary" 
                  sx={{height: 8,
                    width: 100,
                    backgroundColor:'#B1B1B1', 
                    borderRadius: 22, 
                    '& .MuiLinearProgress-bar': {
                      // backgroundColor: '#636363',
                      backgroundColor: 'black',
                    },
                }} />
          </div>
        </div>
      </div>

      <div className="DayProgressBar">бля вообще хз как делать</div>

      <div className="DeadlineDates">
        <div className="DeadlineCreateDate">
          <div className="DeadlineDateInnerDiv">
            <div className="DeadlineDateWord">Дата создания</div>
            <div className="DeadlineDateDate">12 Марта, 2024</div>
          </div>
        </div>
        
        <div className="DeadlineDeadlineDate">
          <div className="DeadlineDateInnerDiv">
            <div className="DeadlineDateWord">Дедлайн</div>
            <div className="DeadlineDateDate">24 Марта, 2024</div>
          </div>
          <div className="DeadlineChange">Изменить</div>
        </div>
        
      </div>

    </>
  )
}

export default Deadline