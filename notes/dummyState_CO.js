// this initial state presumes 2 players, 3 locations (one for each color), 3 connection and 3 misinfo cards, and NO viral cards. 
//! one location is stored 5+ times (in sources, both players, both card decks, and the player nested within turn)

const dummyInitialState = {
  sources:[
    {
      name: 'University', 
      color: 'blue',
      markers: { 
        red: 0,
        blue: 0,
        yellow: 0,
      },
      canMove: false,
      canLogOn: false,
      canLogOff: false,
      canClearRed: false,
      canClearBlue: false,
      canClearYellow: false,
      canShare: [],
      canDebunk: [], 
    },
    {
      name: 'Gym', 
      color: 'red',
      markers: { 
        red: 0,
        blue: 0,
        yellow: 0,
      },
      canMove: false,
      canLogOn: false,
      canLogOff: false,
      canClearRed: false,
      canClearBlue: false,
      canClearYellow: false,
      canShare: [],
      canDebunk: [], 
    },
    {
      name: 'Instagram', 
      color: 'yellow',
      markers: { 
        red: 0,
        blue: 0,
        yellow: 0,
      },
      canMove: false,
      canLogOn: false,
      canLogOff: false,
      canClearRed: false,
      canClearBlue: false,
      canClearYellow: false,
      canShare: [],
      canDebunk: [], 
    },
  ],
  players: [
    { 
      name: 'Player 1', 
      cards: [],
      cardHandOverflow: false,
      isCurrent: false, 
      pawnColor: 'green',
      currentSource: {
        name: 'University', 
        color: 'blue',
        markers: { 
          red: 0,
          blue: 0,
          yellow: 0,
        },
        canMove: false,
        canLogOn: false,
        canLogOff: false,
        canClearRed: false,
        canClearBlue: false,
        canClearYellow: false,
        canShare: [],
        canDebunk: [], 
      },
    },
    { 
      name: 'Player 2', 
      cards: [],
      cardHandOverflow: false,
      isCurrent: false, 
      pawnColor: 'purple',
      currentSource: {
        name: 'University', 
        color: 'blue',
        markers: { 
          red: 0,
          blue: 0,
          yellow: 0,
        },
        canMove: false,
        canLogOn: false,
        canLogOff: false,
        canClearRed: false,
        canClearBlue: false,
        canClearYellow: false,
        canShare: [],
        canDebunk: [], 
      },
    },
  ],
  spreadLevel: 1,
  chaosMeter: 0,
  misinformation: {
    red: {
      name: 'red',
      debunked: false,
      markersLeft: 16, 
    },
    blue: {
      name: 'blue',
      debunked: false,
      markersLeft: 16, 
    },
    yellow: {
      name: 'yellow',
      debunked: false,
      markersLeft: 16, 
    },
  },
  connectionDeck: {
    active: [
      {
        name: 'University', 
        color: 'blue',
        markers: { 
          red: 0,
          blue: 0,
          yellow: 0,
        },
        canMove: false,
        canLogOn: false,
        canLogOff: false,
        canClearRed: false,
        canClearBlue: false,
        canClearYellow: false,
        canShare: [],
        canDebunk: [], 
      },
      {
        name: 'Gym', 
        color: 'red',
        markers: { 
          red: 0,
          blue: 0,
          yellow: 0,
        },
        canMove: false,
        canLogOn: false,
        canLogOff: false,
        canClearRed: false,
        canClearBlue: false,
        canClearYellow: false,
        canShare: [],
        canDebunk: [], 
      },
      {
        name: 'Instagram', 
        color: 'yellow',
        markers: { 
          red: 0,
          blue: 0,
          yellow: 0,
        },
        canMove: false,
        canLogOn: false,
        canLogOff: false,
        canClearRed: false,
        canClearBlue: false,
        canClearYellow: false,
        canShare: [],
        canDebunk: [], 
      },
    ],
  }, 
  misinformationDeck: {
    active: [
      {
        name: 'University', 
        color: 'blue',
        markers: { 
          red: 0,
          blue: 0,
          yellow: 0,
        },
        canMove: false,
        canLogOn: false,
        canLogOff: false,
        canClearRed: false,
        canClearBlue: false,
        canClearYellow: false,
        canShare: [],
        canDebunk: [], 
      },
      {
        name: 'Gym', 
        color: 'red',
        markers: { 
          red: 0,
          blue: 0,
          yellow: 0,
        },
        canMove: false,
        canLogOn: false,
        canLogOff: false,
        canClearRed: false,
        canClearBlue: false,
        canClearYellow: false,
        canShare: [],
        canDebunk: [], 
      },
      {
        name: 'Instagram', 
        color: 'yellow',
        markers: { 
          red: 0,
          blue: 0,
          yellow: 0,
        },
        canMove: false,
        canLogOn: false,
        canLogOff: false,
        canClearRed: false,
        canClearBlue: false,
        canClearYellow: false,
        canShare: [],
        canDebunk: [], 
      },
    ],
    passive: [],
  },
  currentTurn: {
    player: { 
      name: 'Player 1', 
      cards: [],
      cardHandOverflow: false,
      isCurrent: false, 
      pawnColor: 'green',
      currentSource: {
        name: 'University', 
        color: 'blue',
        markers: { 
          red: 0,
          blue: 0,
          yellow: 0,
        },
        canMove: false,
        canLogOn: false,
        canLogOff: false,
        canClearRed: false,
        canClearBlue: false,
        canClearYellow: false,
        canShare: [],
        canDebunk: [], 
      },
    },
    movesLeft: 0,
  },
  gameWon: false,
  gameLost: false,
}