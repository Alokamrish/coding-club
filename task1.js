fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
  .then(response => response.json())
  .then(data => {
    const leaderboardDiv = document.getElementById('leaderboard');

    data.forEach(entry => {
      const row = document.createElement('div');
      row.classList.add('row');

      const name = document.createElement('p');
      name.classList.add('p');
      name.textContent = entry.name;

      const point = document.createElement('div');
      points.classList.add('score');
      points.textContent = entry.points

      row.appendChild(name);
      row.appendChild(points);
      leaderboardDiv.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
