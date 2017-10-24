import calculateWinner from '../utils/calculate';

const initialState = {
  history: [{
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: true,
};

const GamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_CLICK': {
      const i = action.index;
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return state;
      }
      squares[i] = state.xIsNext ? 'X' : 'O';
      return Object.assign({}, state, {
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
      });
    }
    case 'JUMP_TO':
      return Object.assign({}, state, {
        history: state.history,
        stepNumber: action.stepNumber,
        xIsNext: action.xIsNext,
      });
    default:
      return state;
  }
};

export default GamesReducer;
