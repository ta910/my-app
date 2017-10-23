import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import GamesReducer from './reducers/game';
import Game from './containers/game';

document.addEventListener('DOMContentLoaded', () => {

  const store = createStore(GamesReducer);

  ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById('root')
  );
});
