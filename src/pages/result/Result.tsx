import React, { useContext } from "react";

import { cardContext } from "../../context/GameContext";
import './result.css'

import Progress from "../../components/progress/Progress";
import { useNavigate } from "react-router-dom";

const Result: React.FC = () => {
  const ctx = useContext(cardContext);
  const navigate = useNavigate();

  const onRestart = (): void => {
    ctx.setprogress(0);
    ctx.setlives(5);
    navigate("/instructions");
  }

  return (
    <div className="result-page">
      <div className="progress-wrapper">
        <Progress/>
      </div>
      <div className="result-wrapper">
        <div className="result">
          <img src="/bright-light.png" className="bright-light"/>
          <img src="/result-top.png" />
          <div className="result-text">
            <p>Earned</p>
            <h1> {ctx.progress / 17} Banana's</h1>
          </div>
        </div>
        <img src="monkey-2.png" className="monkey-img"/>
        <img src="restart-btn.png" className="restart-btn" onClick={onRestart}/>
      </div>
      <img src="yellow-banana.png"  className="banana-1 banana-6"/>
      <img src="yellow-banana.png"  className=" banana-1 banana-2"/>
      <img src="yellow-banana.png"  className=" banana-1 banana-3"/>
      <img src="yellow-banana.png"  className=" banana-1 banana-4"/>
      <img src="yellow-banana.png"  className= "banana-1 banana-5"/>
    </div>
  );
};

export default Result;