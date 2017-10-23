import * as React from 'react';
import game from './game';

const ROUTES = {
  '': game,
};

class Application extends React.Component {
  constructor() {
    super();

    this.state = {
      currentRoute: '',
    };
  }

  componentDidMount() {
    window.addEventListener('popstate', e => {
      if (typeof e.state !== 'string') return;

      this.setState({ currentRoute: e.state });
    });
  }

  transitionTo(route) {
    this.setState({ currentRoute: route });
    window.history.pushState(route, `route: ${route}`, `http://localhost:3000/${route}`);
  }

  render() {
    const Route = ROUTES[this.state.currentRoute];

    if (Route !== undefined) {
      return (
        <Route />
      );
    }

    return (
      <div>
        Not Found.

        <a onClick={() => this.transitionTo('')}>
          Back to index page
        </a>
      </div>
    );
  }
}

export default Application;
