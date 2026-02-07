import React, { useState } from "react";

const QuizWidget = ({ setCarbonFootprint }) => {
  const questions = [
    {
      question: "How often do you use private transportation?",
      options: [
        { text: "Daily", impact: 50 },
        { text: "A few times a week", impact: 20 },
        { text: "Rarely", impact: 5 },
      ],
    },
    {
      question: "How many meat-based meals do you consume weekly?",
      options: [
        { text: "More than 10", impact: 30 },
        { text: "5-10", impact: 10 },
        { text: "Less than 5", impact: 0 },
      ],
    },
    {
      question: "How energy-efficient are your appliances?",
      options: [
        { text: "Not at all", impact: 25 },
        { text: "Somewhat", impact: 10 },
        { text: "Highly efficient", impact: 0 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalImpact, setTotalImpact] = useState(0);

  const handleAnswer = (impact) => {
    const newImpact = totalImpact + impact;
    setTotalImpact(newImpact);
    setCarbonFootprint(newImpact);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div style={styles.quizWidget}>
      <h3 style={styles.title}>📝 Calculate Your Carbon Footprint</h3>
      <div style={styles.quizContainer}>
        <p style={styles.questionText}>{questions[currentQuestion].question}</p>
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.impact)}
            style={styles.optionButton}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div style={styles.progressBar}>
        <div
          style={{
            ...styles.progress,
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  quizWidget: {
    backgroundColor: "#f0f8ff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    margin: "20px auto",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "#1e90ff",
  },
  quizContainer: {
    marginBottom: "20px",
  },
  questionText: {
    fontSize: "1.1rem",
    marginBottom: "20px",
    color: "#333",
  },
  optionButton: {
    display: "block",
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "25px",
    margin: "10px 0",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  optionButtonHover: {
    backgroundColor: "#45a049",
  },
  progressBar: {
    width: "100%",
    height: "8px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    marginTop: "20px",
  },
  progress: {
    height: "100%",
    backgroundColor: "#1e90ff",
    borderRadius: "5px",
  },
};

export default QuizWidget;