import { useContext, useEffect, useState } from "react";
import "../pages/Activity/activity.css";
import { cardContext } from "../context/GameContext"; // Assuming you have exported CardContextData interface from GameContext

interface CardProps {
  Ukey: string;
  frontImage: string;
  color: string;
  backImage: string;
}

const Card: React.FC<CardProps> = (props) => {
  const [cardflipped, setCardFlipped] = useState<boolean>(false);
  const [visible, setVisible] = useState<"visible" | "hidden" | "collapse">("visible"); // Adjusted the type here
  const cardsCtx = useContext(cardContext); // Specify the type here

  const flipCard = () => {
    if (!cardsCtx.pinkCardsEnabled) {
      return;
    }
    setCardFlipped(true);
    cardsCtx.setBlueCardsEnabled(true);
    cardsCtx.setPinkCardsEnabled(false);
    cardsCtx.setSelectedPinkCard(props.Ukey);
  };

  useEffect(() => {
    if (cardsCtx.selectedBlueCard === props.Ukey) {
      setTimeout(() => {
        setVisible("hidden"); // Adjusted here
      }, 1000);
    }
  }, [cardsCtx.selectedBlueCard]);

  useEffect(() => {
    if (cardsCtx.selectedPinkCard === "") {
      setTimeout(() => {
        setCardFlipped(false);
      }, 1200);
    }
  }, [cardsCtx.selectedPinkCard]);

  return (
    <div
      className={`card ${cardflipped ? "flipped" : ""}`}
      style={{ visibility: visible }} // Adjusted here
    >
      <div className="card-inner" onClick={flipCard}>
        <div className="card-front">
          <img src={props.frontImage} alt="Front Image" />
        </div>
        <div className="card-back">
          <div
            className="card-back-inner"
            style={{ backgroundColor: props.color }}
          >
            <img src={props.backImage} alt="Back Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
