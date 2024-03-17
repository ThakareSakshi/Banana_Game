import React, { FC } from 'react';
import './App.css';
import Startpage from './pages/Introduction/Startpage';
import Secondpage from './pages/Introduction/Secondpage';
import Thirdpage from './pages/Introduction/Thirdpage';
import Instruction from './pages/Instructions/Instruction';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import ActivityPage from './pages/Activity/ActivityPage';
import GameContext from './context/GameContext';
import Result from './pages/result/Result';

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Startpage />
    },
    {
      path: '/introduction2',
      element: <Secondpage />
    },
    {
      path: '/introduction3',
      element: <Thirdpage />
    },
    {
      path: '/instructions',
      element: <Instruction />
    },
    {
      path: '/activity',
      element: <ActivityPage />
    },
    {
      path: '/result',
      element: <Result />
    }
  ]);

  return (
    <div className='app'>
      <GameContext>
        <RouterProvider router={router}></RouterProvider>
      </GameContext>
    </div>
  );
};

export default App;
