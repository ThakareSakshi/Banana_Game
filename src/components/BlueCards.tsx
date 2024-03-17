import { useEffect, useState, FC } from 'react';
import "../pages/Activity/activity.css";
import { useContext } from 'react';
import { cardContext, CardContextData } from '../context/GameContext'; // Import CardContextData interface
import { useNavigate } from 'react-router-dom';

interface BlueCardProps {
  Ukey: string;
  frontImage: string;
  color: string;
  alphabet: string;
}

const BlueCards: FC<BlueCardProps> = (props) => {

    const [cardflipped, setCardFlipped] = useState<boolean>(false);
    const [isVisible, setvisible] = useState<"visible" | "hidden" | "collapse">("visible");
    
    const navigate = useNavigate();
    const cardsCtx = useContext<CardContextData>(cardContext); // Specify the type here

    const flipCard = (): void => {
      
      if(!cardsCtx.blueCardsEnabled){
        return;
      }
      setCardFlipped(true);
      cardsCtx.setSelectedBlueCard(props.Ukey);
      cardsCtx.setPinkCardsEnabled(true);
      cardsCtx.setBlueCardsEnabled(false);
      console.log("selected blue",cardsCtx.selectedBlueCard)
    
      if(props.Ukey == cardsCtx.selectedPinkCard){
        console.log("itsm match");
        const newProgress=cardsCtx.progress+17;
        cardsCtx.setprogress(newProgress);
        setTimeout(() => {
          setvisible("hidden");
        }, 1000);
        console.log("progress : ",cardsCtx.progress);
      
        if(cardsCtx.progress >= 85 ){
          cardsCtx.setSelectedPinkCard("");
          cardsCtx.setSelectedBlueCard("");
          setTimeout(() => {
            navigate("/result");
          }, 1000);
        }
      }
      else{
        setTimeout(() => {
          const newLives = cardsCtx.lives - 1;
          cardsCtx.setlives(newLives);
        }, 1000)
        cardsCtx.setSelectedPinkCard("");
        cardsCtx.setSelectedBlueCard("");
        setTimeout(() => {
          setCardFlipped(false);
       }, 1200)
       return;
      }
  }

  useEffect(() => {
    if(cardsCtx.lives <= 0){
      navigate("/result");
    }
  }, [cardsCtx.lives])


  return (
   <>
   
   <div className={`card ${cardflipped?"flipped":""}`} style={{visibility:isVisible}}>
     <div  className= "card-inner" onClick={flipCard}>
      <div className='card-front'>
        <img src={props.frontImage}/>
      </div>
      <div className='card-back'  >
       <div className='card-back-inner' style={{backgroundColor:props.color}}>
        <h1>{props.alphabet}</h1>
       </div>
      </div>
    </div>

   </div></>
  )
}

export default BlueCards; 
