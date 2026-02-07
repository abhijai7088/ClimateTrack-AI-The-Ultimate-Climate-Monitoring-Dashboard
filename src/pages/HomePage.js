import React, { useState } from "react";
import ProgressTracker from "../components/ProgressTracker";
import RecommendationList from "../components/RecommendationList";
import QuizWidget from "../components/QuizWidget";
import CarbonOffsetCalculator from "../components/CarbonOffsetCalculator";
import CarbonFootprintGraph from "../components/CarbonFootprintGraph";
import TipsWidget from "../components/TipsWidget";
import EnergyTracker from "../components/EnergyTracker";
import NewsFeed from "../components/NewsFeed";
import SustainabilityGoals from "../components/SustainabilityGoals";

import "./HomePage.css";

const HomePage = () => {
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [history, setHistory] = useState([]);

  const updateCarbonFootprint = (newFootprint) => {
    setCarbonFootprint(newFootprint);
    setHistory([...history, { date: new Date().toLocaleDateString(), value: newFootprint }]);
  };

  return (
    <div className="home-page">
      {/* Intro Section */}
      <section className="intro">
        <div className="intro-overlay">
          <h1>Welcome to the Sustainability Hub</h1>
          <p><b>Take actionable steps to reduce your carbon footprint and build a sustainable future.</b></p>
          <p>Explore your energy usage, track progress, and gain practical tips for a greener life.</p>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="section">
        <h2>🌟 Quick Sustainability Tips</h2>
        <div className="subsection">
          <TipsWidget />
        </div>
      </section>

      {/* News Feed Section */}
      <section className="section">
        <h2>🌍 Stay Updated</h2>
        <NewsFeed />
      </section>

      {/* Energy Tracker Section */}
      <section className="section">
        <h2>🔋 Your Energy Usage Tracker</h2>
        <div className="subsection">
          <EnergyTracker />
        </div>
      </section>

      {/* Carbon Footprint and Sustainability Goals Section */}
      <section className="features-section">
        <h2>🌱 Carbon Footprint & Sustainability Goals</h2>
        <div className="subsection carbon-sustainability">
          <div className="carbon-footprint">
            <h3>Track Your Progress</h3>
            <ProgressTracker
              carbonFootprint={carbonFootprint}
              setCarbonFootprint={updateCarbonFootprint}
            />
          </div>
          <div className="sustainability-goals">
            <h3>Set Your Sustainability Goals</h3>
            <SustainabilityGoals />
          </div>
        </div>
      </section>

      {/* Quiz and Carbon Footprint Trends Section */}
      <section className="quiz-trends-section">
        <div className="subsection">
          <h3>Quiz: What's Your Carbon Footprint?</h3>
          <QuizWidget setCarbonFootprint={updateCarbonFootprint} />
        </div>
        <div className="subsection">
          <h3>Carbon Footprint Trends</h3>
          <CarbonFootprintGraph history={history} />
        </div>
      </section>

      {/* Sustainability Tips and Carbon Offset Section */}
      <section className="sustainability-tips-offset-section">
        <div className="subsection">
          <h3>Get Personalized Sustainability Tips</h3>
          <RecommendationList carbonFootprint={carbonFootprint} />
        </div>
        <div className="subsection">
          <h3>Offset Your Carbon Footprint</h3>
          <CarbonOffsetCalculator carbonFootprint={carbonFootprint} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;