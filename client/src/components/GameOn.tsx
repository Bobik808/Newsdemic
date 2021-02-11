
import React, { useEffect, useState } from 'react';
// import { Box, Button, Grommet, Card, CardHeader, CardBody, CardFooter, Meter } from 'grommet';
// import { Notification } from 'grommet-icons';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../redux/gameState/store';
import { getGame, getGames, joinRoom } from '../socket-io-client/socket-io-client';
import { CureDeck } from '../components/CureDeck/CureDeck';
import { getIcon } from '../helpers/iconExporter'
import { SourceCard } from '../components/SourceCard/SourceCard';
import { CardHand } from '../components/CardHand/CardHand';
import { SourceDeck } from '../components/sourceDeck/sourceDeck'
import { MarkersStore } from '../components/MarkersStore/MarkersStore'
import { MisinformationDeck } from '../components/MisinformationDeck/misinformationDeck'
import { ChaosMeter } from '../components/ChaosMeter/ChaosMeter'
import { SpreadLevel } from '../components/SpreadLevel/SpreadLevel';
import { PlayerPrompt } from '../components/PlayerPrompt/PlayerPrompt';
import { SourceParent } from '../components/SourceParent/SourceParent';
import { NewGameMenu } from '../components/NewGameMenu/NewGameMenu'
import { addPlayerToGameState, DealCardsToNewPlayerAction, StartGameAction } from '../redux/gameState/gameStateActions';
import { Gamestate, Player } from '../types/gameStateTypes';
import { UpdateGameStateAction } from '../redux/gameState/reduxTypes';
import { OtherPlayer } from './OtherPlayer/OtherPlayer';


interface Props {
  rendered: boolean
}

export const GameOn: React.FC<Props> = ({ rendered }): JSX.Element => {

  const dispatch = useDispatch();
  // const [showSidebar, setShowSidebar] = useState(false);
  const player = useSelector((state: RootState) => state.playerStateReducer)
  const allRooms = useSelector((state: RootState) => state.allGamesStateReducer)

  const getCards = () => {
    state = store.getState().gameStateReducer
    console.log(state, 'state from the gey cards button')
    dispatch(DealCardsToNewPlayerAction({ player, state }))
  }

  const checkCards = (newstate: Gamestate) => {
    for (let PLAYER of newstate.players) {
      if (PLAYER.id === player.id) {
        const p = PLAYER.cards;
        const card = p[0];
        if (!card) {

          return true
        }
      }
    }
    return false;
  };

  

  let state = useSelector((state: RootState) => state.gameStateReducer)
  const ConnectionsWithFrame = getIcon('connectionsWithFrame');

  return (
    <div>
      { (rendered && state.gameOn) &&
        <div className="app-outer-wrapper">
          <div className="app-container">
            {/* <Map /> */}
            {/* <GameBoard /> */}
            <div className="sidebar left">
              {(checkCards(state) === true && state.turnMovesLeft > 3) ?
                <button
                  style={{
                    background: 'royalblue',
                    padding: ' 15px 35px',
                    fontSize: '1em',
                    borderRadius: '20px',
                    border: 'none',
                    fontWeight: 'bold',
                    color: 'white',
                    margin: '15px auto',
                    width: '100%'
                  }}
                  onClick={getCards}> GET CARDS </button>
                :
                <CardHand />
              }
              <PlayerPrompt state={state} />
            </div>
            <div className="board-container">
              <div id="game-board">
                {/* <MapSVG className="map-svg"/> */}
                <ConnectionsWithFrame className="connections-overlay" />
                <SourceParent />
                <OtherPlayer />
                {/* <div id="connections-paths">
                </div> */}
              </div>
              {/* <SourceParent /> */}
              <SourceDeck />
              <MisinformationDeck />
              <MarkersStore />
              {/* <ChaosMeterGrommet /> */}
              {/* <OtherPlayer /> */}
              {/* </Grommet> */}

            </div>
            <div className="sidebar right">
              <ChaosMeter />
              <SpreadLevel />
              <CureDeck />
            </div>
          </div>
        </div>
      }
    </div >
  )
}