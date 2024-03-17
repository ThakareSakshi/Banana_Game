import { FC } from 'react';
import './introduction.css';
import { useNavigate } from 'react-router-dom';

const Secondpage: FC = () => {
  const navigate = useNavigate();

  const openNextPage = (): void => {
    navigate('/introduction3');
  };

  const openPreviousPage = (): void => {
    navigate('/');
  };

  return (
    <div>
      <img src="back-btn.png" className='back-btn' onClick={openPreviousPage}/>
      <div className='message-wrapper'>
        <p className='message'>Hi, I am Mizo ! <br/> and I Love bananas 🍌 </p>
      </div>
      <img src='monkey.png' alt="monkey-image" className='monkey-image'/>
      <img src='next-btn.png' className='next-btn' onClick={openNextPage}/>
    </div>
  );
}

export default Secondpage;