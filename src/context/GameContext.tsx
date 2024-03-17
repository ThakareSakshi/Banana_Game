import  { createContext, FC, useState } from "react";

export interface CardContextData {
  pinkCardsEnabled: boolean;
  blueCardsEnabled: boolean;
  selectedPinkCard: string;
  selectedBlueCard: string;
  progress: number;
  setprogress: (progress: number) => void;
  setBlueCardsEnabled: (enabled: boolean) => void;
  setPinkCardsEnabled: (enabled: boolean) => void;
  setSelectedBlueCard: (card: string) => void;
  setSelectedPinkCard: (card: string) => void;
  lives: number;
  setlives: (lives: number) => void;
}

export const cardContext = createContext<CardContextData>({} as CardContextData);

interface GameContextProps {
  children: React.ReactNode;
}

const GameContext: FC<GameContextProps> = ({ children }) => {
  const [pinkCardsEnabled, setPinkCardsEnabled] = useState<boolean>(true);
  const [blueCardsEnabled, setBlueCardsEnabled] = useState<boolean>(false);
  const [progress, setprogress] = useState<number>(0);
  const [selectedPinkCard, setSelectedPinkCard] = useState<string>("");
  const [selectedBlueCard, setSelectedBlueCard] = useState<string>("");
  const [lives, setlives] = useState<number>(5);

  const data: CardContextData = {
    pinkCardsEnabled,
    blueCardsEnabled,
    selectedBlueCard,
    selectedPinkCard,
    progress,
    setprogress,
    setBlueCardsEnabled,
    setPinkCardsEnabled,
    setSelectedBlueCard,
    setSelectedPinkCard,
    lives,
    setlives,
  };

  return (
    <cardContext.Provider value={data}>
      {children}
    </cardContext.Provider>
  );
};

export default GameContext;
