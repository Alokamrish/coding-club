fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
  .then(response => response.json())
  .then(data => {
    const leaderboardDiv = document.getElementById('leaderboard');

    data.forEach(entry => {
      const span = document.createElement('div');
      span.classList.add('span');

      const name = document.createElement('p');
      name.classList.add('p');
      name.textContent = entry.name;

      const points = document.createElement('div');
      points.classList.add('points');
      points.textContent = entry.points

      row.appendChild(name);
      row.appendChild(points);
      leaderboardDiv.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
