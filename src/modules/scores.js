class Score {
  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this.score = score;
  }

  /* Mocking Data */

  scoreData = [
    {
      id: 1,
      name: 'A',
      score: 10,
    },
    {
      id: 2,
      name: 'B',
      score: 20,
    },
    {
      id: 3,
      name: 'C',
      score: 30,
    },
    {
      id: 4,
      name: 'D',
      score: 40,
    },
  ]

  /* Display Score */
  getScore = () => {
    const scoresContainer = document.getElementById('scores');
    scoresContainer.innerHTML = this.scoreData.map((element) => `<li class="score-item"}>${element.name} : ${element.score}</li>`).join('');
  }

  /* Add a new Score */
  addScore=({ name, scoreNum }) => {
    this.scoreData.push({
      id: this.scoreData.length + 1,
      name,
      score: scoreNum,
    });
    this.getScore();
  }
}

export default Score;
