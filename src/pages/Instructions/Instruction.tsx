import  { FC } from 'react';

import Progress from '../../components/progress/Progress';
import "./instruction.css";
import { useNavigate } from "react-router-dom";

const Instruction: FC = () => {

  const navigate = useNavigate();

  const openNextPage = (): void => {
    navigate('/activity')
  }
  const openPreviousPage = (): void => {
    navigate('/introduction3')
  }
  return (
    <div className=" instruction-page ">
      {/* ===========progress bar =================== */}
      <div className="progress-wrapper">
        <Progress />
      </div>
      <img src="back-btn.png" className="back-btn" onClick={openPreviousPage} />
      <div>
        {/* ------------------step 1----------------- */}
        <div className="instruction-cards-wrapper ">
          <div className="instruction-card ">
            <div className="instruction-image-wrapper">
              <img src="/cardpink-card.png" className="step-1-image" />
              <img src="/pinkCard.png" />
            </div>
            <h1>Select a pink card</h1>
            <p>It has Images</p>
            <img src="/01.png" className="step" />
          </div>

          {/* ----------------step 2 ------------------ */}
          <div className="instruction-card">
            <div className="instruction-image-wrapper">
              <img src="/blueCard.png" />
            </div>
            <h1>Select a blue card</h1>
            <p>it has alphabet</p>
            <img src="/2.png" className="step" />
          </div>

          {/* ------------------- step 3-------------------- */}
          <div className="instruction-card">
            <div className="instruction-image-wrapper">
              <img src="/step-3.png" />
            </div>
            <p>If they're same</p>
            <h1>It's Match !</h1>
            <p>otherwise retry :(</p>
            <img src="/3.png" className="step" />
          </div>
          <img src="/vectorLine.png" className="vector-line" />
        </div>
      </div>

      {/* ---------------play btn------------------- */}

      <img src="play-btn.png" className="play-btn" onClick={openNextPage} />
    </div>
  );
}

export default Instruction;