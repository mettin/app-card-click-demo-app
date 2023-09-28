import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {useState} from "react"

const App = () => {
  const [clickedCard, setClickedCard] = useState()
  React.useEffect(() => {
    const listenForClickOnAppCard = async () => {
      const idGetParam = new URLSearchParams(window.location.search).get('id')
      const cardInfo = await miro.board.getById(idGetParam);
      
      setClickedCard(cardInfo)
    }
    
    const createAppCard = async () => {
      await miro.board.createAppCard({
        title: 'This is the title of the app card',
        description:
          'The custom preview fields are highlighted in different colors; the app card icon is displayed on the bottom-right.',
        status: 'connected', // Default status of new app cards: 'disconnected'
      });
    }
    
    createAppCard()
    listenForClickOnAppCard()
    
  }, []);

  return (
    <div className="grid wrapper">
      <div className="cs1 ce12">
        <p>This demo app shows how to show the description for app cards</p>
      
      {clickedCard &&
        <p>There is a app card clicked with the following description:<br/> <em>{clickedCard.description}</em></p>
      }
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
