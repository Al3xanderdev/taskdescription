import React from "react"
import "./StatusPriority.css"
import graph_icon from '../res/graph.svg'
import circles_icon from '../res/circles.svg'
import razdelpalka_icon from '../res/razdel-palka.svg'

const StatusPriority: React.FC = () => {
  return (
    <>
      <div className="SP">
        <div className="SPPanel">
          <div className="SPPanelHeader">
            <img src={graph_icon} alt="" />
            <div className="SPPanelWord">Статус</div>
          </div>
          <div className="SPPanelFooter">
            <div className="SPPanelFooterOptionChosen">
              <div className="SPPanelFooterOptionNameChosen">Не начат</div>
            </div>

            <div className="SPPanelFooterOption">
              <div className="SPPanelFooterOptionName">В разработке</div>
            </div>

            <div className="SPPanelFooterOption">
              <div className="SPPanelFooterOptionName">Завершён</div>
            </div>
          </div>
        </div>

        <div className="SPPanel">
          <div className="SPPanelHeader">
            <img src={circles_icon} alt="" />
            <div className="SPPanelWord">Приоритет</div>
          </div>
          <div className="SPPanelFooter">
            <div className="SPPanelFooterOptionChosen">
              <div className="SPPanelFooterOptionNameChosen">Низкий</div>
            </div>

            <div className="SPPanelFooterOption">
              <div className="SPPanelFooterOptionName">Средний</div>
            </div>

            <div className="SPPanelFooterOption">
              <div className="SPPanelFooterOptionName">Высокий</div>
            </div>
          </div>
        </div>
      </div>
      
      <img src={razdelpalka_icon} alt="" />
    </>
  )
}

export default StatusPriority