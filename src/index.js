import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import GamesReducer from './reducers/game';
import Application from './application';

document.addEventListener('DOMContentLoaded', () => {

  const store = createStore(GamesReducer);

  ReactDOM.render(
    <Provider store={store}>
      <Application />
    </Provider>,
    document.getElementById('root')
  );
});
