import React, { useContext, useEffect, useState } from 'react';
import Card from '../../components/Cards.tsx';
import BlueCard from '../../components/BlueCards.tsx';
import fruitData from '../../data/fruitData.json';
import AlphabetData from '../../data/Alphabets.json';
import Progress from '../../components/progress/Progress.tsx';
import { cardContext } from '../../context/GameContext.tsx';

interface Fruit {
    id: number; Ukey: string; backImage: string; frontImage: string; 
}

interface Alphabet {
    id: number; Ukey: string; frontImage: string; alphabet: string;
}

const ActivityPage: React.FC = () => {
  const [fruits, setFruits] = useState<Fruit[]>(fruitData);
  const [alphabets, setAlphabets] = useState<Alphabet[]>(AlphabetData);
  const ctx = useContext(cardContext);

  useEffect(() => {
    setFruits([...shuffle(fruitData)]);
    setAlphabets([...shuffle(alphabets)]);
  }, []);

  function shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className='activity'>
      <div className='progress-wrapper'>
        <Progress />
      </div>
      <p className='lives'>Lives Remaining : {ctx.lives}</p>
      <div className='cards-container'>
        <div className='card-wrapper'>
          {fruits.map((fruit) => {
            return <Card color="pink" key={fruit.id} {...fruit} />;
          })}
        </div>
        <div className='card-wrapper'>
          {alphabets.map((alphabet) => {
            return <BlueCard color="#89E6F5" key={alphabet.id} {...alphabet} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;