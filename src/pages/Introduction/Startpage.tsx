import React, { FC } from "react";
import './introduction.css'
import { useNavigate } from "react-router-dom";

const Startpage: FC = () => {
  const navigate = useNavigate();

  const openNextPage = (): void => {
    navigate('/introduction2')
  }
  return (
    <div>
      <div className='message-wrapper'>
        <p className="message">Welcome Kiddo !</p>
      </div>
      <img src="monkey.png" alt="monkey-image" className="monkey-image" />

      <img
        src="next-btn.png"
        className=" next-btn"
        onClick={openNextPage}
      />
    </div>
  );
};

export default Startpage;