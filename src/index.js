import './style.css';
import Score from './modules/scores.js';

const newScore = new Score();
const addScore = document.querySelector('.input-form');

addScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = addScore.name.value;
  const scoreNum = addScore.score.value;
  newScore.addScore({ user, scoreNum });
  addScore.name.value = '';
  addScore.score.value = '';
  addScore.reset();
});

const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', newScore.fetchingData);
window.addEventListener('load', newScore.getScore);
