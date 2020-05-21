import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Pokemons from '../pages/Pokemons';

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Pokemons} />
      </Switch>
    </>
  );
};

export default Routes;
