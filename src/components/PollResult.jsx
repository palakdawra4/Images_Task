import React from "react";

const pollData = [
  {
    image: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif", 
    percentage: "90%",
    votes: 1024,
  },
  {
    image: "https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif", 
    percentage: "8%",
    votes: 80,
  },
  {
    image: "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif", 
    percentage: "2%",
    votes: 20,
  },
];

const PollResults = () => {
  return (
    <div className="poll-results-container">
      <h2>Detailed Poll Results</h2>
      <h4>Distribution of Answers</h4>
      {pollData.map((poll, index) => (
        <div key={index} className="poll-item">
          <img src={poll.image} alt={`Poll option ${index + 1}`} className="poll-gif" />
          <span className="poll-percentage">{poll.percentage} ({poll.votes})</span>
        </div>
      ))}
      <style jsx>{`
        .poll-results-container {
          font-family: Arial, sans-serif;
          max-width: 400px;
          margin: 20px auto;
        }
        .poll-item {
          display: flex;
          align-items: center;
          margin: 10px 0;
          padding: 10px;
          transition: background-color 0.3s ease; /* Smooth transition */
        }
        .poll-item:hover {
          background-color: #F7F8F8; /* Background color on hover */
        }
        .poll-gif {
          width: 150px;
          height: auto;
          border: 5px solid #E8EAEC; /* Border around the GIF */
          border-radius: 20px;
          margin-right: 15px;
        }
        .poll-percentage {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default PollResults;
