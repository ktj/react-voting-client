import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];
const loki = (entry) => {console.log(entry)};
ReactDOM.render(
  <Voting pair={pair} vote={loki} winner="Trainspotting"/>,
  document.getElementById('app')
);
