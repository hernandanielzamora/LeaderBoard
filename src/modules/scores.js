class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  apiData = [];

  apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dwaUzchB7HMCYRhPP4Wk/scores/';

  /* Display Score */
  getScore = () => {
    const scoresContainer = document.getElementById('scores');
    scoresContainer.innerHTML = this.apiData.map((element) => `<li class="score-item">${element.user} : ${element.score}</li>`).join('');
  }

  fetchingData = async () => {
    try {
      const data = await fetch(this.apiUrl);
      const res = await data.json();
      this.apiData = [];
      res.result.map((element) => this.apiData.push(element));
      return this.getScore();
    } catch (err) { return err; }
  }

  /* Add a new Score */
  addScore = async ({ user, scoreNum }) => {
    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, score: scoreNum }),
      };

      const data = await fetch(this.apiUrl, config);
      const res = await data.json();
      this.apiData.push(res);
      return this.fetchingData();
    } catch (err) { return err; }
  }
}

export default Score;
