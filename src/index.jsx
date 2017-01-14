import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];
const loki = (entry) => {console.log(entry)};

const routes = <Route component={App}>
  <Route path="/" component={Voting} />
</Route>;

ReactDOM.render(
  <Voting pair={pair} vote={loki} winner="Trainspotting"/>,
  document.getElementById('app')
);
