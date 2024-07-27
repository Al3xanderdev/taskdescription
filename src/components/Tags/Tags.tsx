import React from "react";
import "./Tags.css"
import flag_icon from '../res/flag.svg'
import razdelpalka_icon from '../res/razdel-palka.svg'

const Tags: React.FC = () => {
  return (
    <>
      <div className="Tags">
        <div className="TagsLeft">
          <img src={flag_icon} alt="" />
          <div className="TagsLeftName">Метки</div>
        </div>
        <div className="TagsRight">
          <div className="TagsButton">
            <div className="TagsButtonName">Office</div>
          </div>
          <div className="TagsButton">
            <div className="TagsButtonName">Office</div>
          </div>
          <div className="TagsButton">
            <div className="TagsButtonName">Office</div>
          </div>
          <div className="TagsButton">
            <div className="TagsButtonName">Office</div>
          </div>
          <div className="TagsButton">
            <div className="TagsButtonName">Office</div>
          </div>
        </div>
      </div>
      
      <img src={razdelpalka_icon} alt="" />
    </>
  )
}

export default Tags