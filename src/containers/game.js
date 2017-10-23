import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from '../components/board';
import calculateWinner from '../utils/calculate';
import '../index.css';
import * as gameActions from '../actions/game';

class Game extends React.Component {
  handleClick(i) {
    this.props.dispatch(gameActions.handleClick(i));
  }
  jumpTo(step) {
    this.props.dispatch(gameActions.jumpTo(step));
  }
  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #${move}` :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.arrayOf(PropTypes.node),
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool,
}.isRequired;

export default connect(state => state)(Game);
