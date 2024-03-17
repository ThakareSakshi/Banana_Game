import React, { FC } from 'react';
import "./introduction.css"
import Progress from '../../components/progress/Progress';
import { useNavigate } from "react-router-dom";

const Thirdpage: FC = () => {
  const navigate = useNavigate();

  const openNextPage = () => {
    navigate('/instructions')
  }
  const openPreviousPage = () => {
    navigate('/introduction2')
  }
  return (
    <div className='third-page'>
      <Progress />
      <img src="back-btn.png" className='back-btn' onClick={openPreviousPage} />

      <div className='message-wrapper'>
        <p className='message'>Can you help me to get <br /> some ? </p>
      </div>
      <img src='monkey.png' alt="monkey-image" className='monkey-image' />

      <img src='yes-btn.png' className='next-btn' onClick={openNextPage} />

    </div>
  )
}

export default Thirdpage;