import React, { FC, useContext } from 'react';
import { cardContext } from '../../context/GameContext';
import './progress.css';

const Progress: FC = () => {
  const ctx = useContext(cardContext);
  return (
    <div className='progress'>
      <div className='progress-bar' style={{ width: `${ctx.progress}%` }}></div>
      {
        ctx.progress >= 100 ? <img src="yellow-banana.png" /> : <img src="banana.png" />
      }
    </div>
  );
}

export default Progress;