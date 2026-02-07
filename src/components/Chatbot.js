// src/components/Chatbot.js
import React, { useState } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message to the chat
    setMessages([...messages, { sender: "user", text: input }]);

    // Clear the input field
    setInput("");

    // Get chatbot's response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botResponse },
      ]);
    }, 500); // Reduced response delay for better experience
  };

  const getBotResponse = (userMessage) => {
    // Predefined responses for common queries
    const responses = {
      "What is climate change":
        "Climate change refers to long-term shifts in temperatures and weather patterns, primarily caused by human activities like burning fossil fuels.",
      "How can I reduce my carbon footprint":
        "You can reduce your carbon footprint by using energy-efficient appliances, walking or cycling instead of driving, and supporting renewable energy.",
      "What are the effects of climate change":
        "Climate change can lead to extreme weather events, rising sea levels, loss of biodiversity, and more.",
      "Tell me a fact about climate change.":
        "Did you know that the Earth's average surface temperature has risen by about 1.1°C since the late 19th century?",
      "What are renewable energy sources":
        "Renewable energy sources include solar, wind, hydroelectric, geothermal, and biomass energy.",
    };

    // Return predefined response or a default message
    if (responses[userMessage]) {
      return responses[userMessage];
    }

    // Fallback for unknown queries
    return generateDynamicResponse(userMessage);
  };

  const generateDynamicResponse = (message) => {
    if (message.toLowerCase().includes("hello")) {
      return "Hello! How can I assist you with climate-related questions today?";
    }
    if (message.toLowerCase().includes("thank")) {
      return "You're welcome! Feel free to ask more questions.";
    }
    if (message.toLowerCase().includes("help")) {
      return "Sure, I'm here to help. Ask me anything about climate change, renewable energy, or environmental tips.";
    }
    return "I'm not sure about that. Can you rephrase or ask something else related to climate change?";
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        <div className="chat-header">
          <h3>Climate AI Chatbot</h3>
          <button
            className="close-btn"
            onClick={() => setMessages([])} // Clear chat history
          >
            X
          </button>
        </div>
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === "user" ? "user" : "bot"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask about climate change..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
