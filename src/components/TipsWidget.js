import React from "react";
import tipsData from "../api/sustainability_tips.json"; // Adjust the path based on the file location
import "./TipsWidget.css";

const TipsWidget = () => {
  const tips = tipsData.tips;

  return (
    <div className="tips-widget">
      <h3>🌱 Sustainability Tips</h3>
      <div className="tips-list">
        {tips.map((tip, index) => (
          <div key={index} className="tip-item">
            <div className="tip-icon">{tip.icon}</div>
            <div className="tip-content">
              <h4>{tip.title}</h4>
              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsWidget;
