import React from 'react';
import PlayersContainer from './components/PlayersContainer';
import enemy from './img/enemy.jpg';
import './App.scss';

const App =  () => {
  return (
    <div className="App">
      <div className="github-ribbon">
        <a href="https://github.com/brunojppb/d-and-d-web">Fork me on Github</a>
      </div>
      <div className="clip-to-bounds-container">
        <PlayersContainer/>
      </div>
      <div className="clip-to-bounds-container">
        <div className="enemies">
          <button className="add-enemy-btn">
            Add Enemy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
