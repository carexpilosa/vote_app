import React from 'react';
import ReactDOM from 'react-dom';
import VotingComponent from './components/VotingComponent';
import Layout from './components/Layout';

const vote = {
  title: 'How is Your day?',
  description: 'How has Your day been so far?',
  totalVotes: 20,
  choices: [
    {id: 'choice1', title: 'Good', count: 7, percent: 35},
    {id: 'choice2', title: 'Bad', count: 12, percent: 35},
    {id: 'choice3', title: 'Not sure yet', count: 1, percent: 5},
  ]
};



ReactDOM.render(
  <Layout>
    <VotingComponent vote={vote} />
  </Layout>,
  document.getElementById('voteAppMountPoint')
);
