class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  /* Array for data */
  apiData = [];

  /* API URL */
  apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dwaUzchB7HMCYRhPP4Wk/scores/';

  /* Display Score */
  getScore = () => {
    const scoresContainer = document.getElementById('scores');
    scoresContainer.innerHTML = this.apiData.map((element) => `<li class="score-item">${element.user} : ${element.score}</li>`).join('');
  };

  /* Getting data from API */
  fetchingData = async () => {
    try {
      const data = await fetch(this.apiUrl);
      const response = await data.json();
      this.apiData = [];
      response.result.map((element) => this.apiData.push(element));
      return this.getScore();
    } catch (error) { return error; }
  };

  /* Add a new Score */
  addScore = async ({ user, scorePoints }) => {
    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, score: scorePoints }),
      };

      const data = await fetch(this.apiUrl, config);
      const response = await data.json();
      this.apiData.push(response);
      return this.fetchingData();
    } catch (error) { return error; }
  };
}

export default Score;
