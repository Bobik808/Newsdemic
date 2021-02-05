import { CLEAR_MISINFO, DEBUNK_MISINFO, DISCARD_ACTION, GameStateActionTypes, LOG_ON_OFF, MOVE_ACTION, SHARE_CARD, UPDATE_GAME_STATE } from './reduxTypes';
import { initDummyState as gameState } from '../../logic/dummyState.REDO_CO'
import { Gamestate } from '../../types/gameStateTypes'
import { clearMisinfo, debunkMisinfo, discardCard, logOnOff, moveAction, shareCard } from '../../logic/actions.newState_CO'
// import {emit} from '../backend-dummy-client/dummy-client'
//here should be a initial State of the Game
const GameState: Gamestate = gameState; 

export function gameStateReducer(
  state = GameState,
  action: GameStateActionTypes
): Gamestate {
  switch (action.type) {
    case MOVE_ACTION: {
      const ap = action.payload;
      return (moveAction(ap.oldState, ap.currentPlayerID, ap.location), { ...state, received: false });
    }
    case CLEAR_MISINFO: {
      const ap = action.payload;
      return (clearMisinfo(ap.oldState, ap.currentPlayerID, ap.misinfoType, ap.location), { ...state, received: false })
    }
    case SHARE_CARD: {
      const ap = action.payload;
      return (shareCard(ap.oldState, ap.currentPlayerID, ap.recipient, ap.sharedCard), { ...state, received: false });
    }
    case LOG_ON_OFF: {
      const ap = action.payload;
      return (logOnOff(ap.oldState, ap.currentPlayerID, ap.location, ap.usedCard), { ...state, received: false });
    }
    case DEBUNK_MISINFO: {
      const ap = action.payload;
      return (debunkMisinfo(ap.oldState, ap.currentPlayerID, ap.usedCards, ap.misinfoType), { ...state, received: false });
    }
    case DISCARD_ACTION: {
      const ap = action.payload;
      return (discardCard(ap.oldState, ap.currentPlayerID, ap.discardedCard), { ...state, received: false });
    }
    case UPDATE_GAME_STATE:
      return {
        ...state, ...action.payload
      }
    default: return state
  }
}
