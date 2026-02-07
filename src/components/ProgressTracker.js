import React from "react";

const ProgressTracker = ({ carbonFootprint, resetCarbonFootprint }) => {
  const maxFootprint = 1000; // Define the maximum carbon footprint
  const progress = Math.min((carbonFootprint / maxFootprint) * 100, 100);
  const remaining = maxFootprint - carbonFootprint;

  const getEncouragingMessage = () => {
    if (progress < 30) return "Great start! Keep up the good work.";
    if (progress < 70) return "You're halfway there! Stay consistent.";
    return "You're almost at the limit. Let's offset more carbon!";
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5rem",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    color: "#2c3e50",
    marginBottom: "1rem",
  };

  const progressCircleStyle = {
    position: "relative",
    width: "150px",
    height: "150px",
    margin: "1rem 0",
  };

  const progressTextStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.25rem",
    color: "#2c3e50",
    fontWeight: "bold",
  };

  const buttonStyle = {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#27ae60",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  };

  const svgStyle = {
    transform: "rotate(-90deg)",
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>🌍 Carbon Footprint Progress</h3>
      <div style={progressCircleStyle}>
        <svg viewBox="0 0 36 36" className="circular-chart" style={svgStyle}>
          <path
            style={{ fill: "none", stroke: "#f0f0f0", strokeWidth: "2.8" }}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            style={{
              fill: "none",
              stroke: progress < 70 ? "#27ae60" : "#e74c3c",
              strokeWidth: "2.8",
              strokeLinecap: "round",
              strokeDasharray: `${progress}, 100`,
            }}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div style={progressTextStyle}>
          <p>{progress.toFixed(1)}%</p>
        </div>
      </div>
      <p>{carbonFootprint} kg CO₂ out of {maxFootprint} kg CO₂</p>
      <p style={{ color: remaining > 0 ? "#27ae60" : "#e74c3c" }}>
        {remaining > 0
          ? `You have ${remaining} kg CO₂ left to stay within the target.`
          : "You have exceeded the recommended limit. Take immediate action!"}
      </p>
      <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#7f8c8d" }}>
        {getEncouragingMessage()}
      </p>
      <button style={buttonStyle} onClick={resetCarbonFootprint}>
        Reset Progress
      </button>
    </div>
  );
};

export default ProgressTracker;