import React, { useState } from "react";

const SustainabilityGoals = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");
  const [newTarget, setNewTarget] = useState(0);

  // Add a new goal
  const addGoal = () => {
    if (newGoal && newTarget > 0) {
      setGoals([...goals, { name: newGoal, target: newTarget, progress: 0 }]);
      setNewGoal("");
      setNewTarget(0);
    }
  };

  // Update progress for a goal
  const updateProgress = (index, increment) => {
    const updatedGoals = goals.map((goal, idx) => {
      if (idx === index) {
        const newProgress = Math.min(goal.progress + increment, goal.target);
        return { ...goal, progress: newProgress };
      }
      return goal;
    });
    setGoals(updatedGoals);
  };

  return (
    <div
      style={{
        margin: "2rem",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#4CAF50" }}>🎯 Your Sustainability Goals</h2>

      {/* Add Goal Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          padding: "1rem",
          backgroundColor: "#e8f5e9",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Enter a new goal (e.g., Reduce energy usage)"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          style={{
            flex: 1,
            marginRight: "1rem",
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          placeholder="Target (e.g., 100)"
          value={newTarget}
          onChange={(e) => setNewTarget(parseInt(e.target.value))}
          style={{
            width: "100px",
            marginRight: "1rem",
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addGoal}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Goal
        </button>
      </div>

      {/* Goal List */}
      {goals.map((goal, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ margin: "0 0 1rem 0", color: "#4CAF50" }}>{goal.name}</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "20px",
                backgroundColor: "#e0e0e0",
                borderRadius: "10px",
                overflow: "hidden",
                marginRight: "1rem",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${(goal.progress / goal.target) * 100}%`,
                  backgroundColor: "#4CAF50",
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
            <span>{`${goal.progress}/${goal.target}`}</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <button
              onClick={() => updateProgress(index, 1)}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginRight: "0.5rem",
                cursor: "pointer",
              }}
            >
              +1 Progress
            </button>
            <button
              onClick={() => updateProgress(index, -1)}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              -1 Progress
            </button>
          </div>
        </div>
      ))}

      {goals.length === 0 && (
        <p style={{ textAlign: "center", color: "#757575" }}>
          No goals yet. Start by adding one!
        </p>
      )}
    </div>
  );
};

export default SustainabilityGoals;
