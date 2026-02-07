import React, { useState, useEffect } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data (mock data here, replace with API call later)
    setLeaderboardData([
      { username: 'User1', score: 1500 },
      { username: 'User2', score: 1200 },
      { username: 'User3', score: 1000 },
    ]);
  }, []);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {leaderboardData.map((user, index) => (
          <li key={index}>
            {user.username}: {user.score} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
