import React, { useState, useEffect } from "react";
import energyData from "../api/energy_data.json"; // Adjust path as needed
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./EnergyTracker.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EnergyTracker = () => {
  const [energyHistory, setEnergyHistory] = useState([]);
  const [monthlyUsage, setMonthlyUsage] = useState(0);
  const [futureConsumption, setFutureConsumption] = useState([]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    // Load historical data from the JSON file
    setEnergyHistory(energyData.records);
  }, []);

  // Predict future consumption based on user input
  const handlePredict = () => {
    const predictions = Array.from({ length: 6 }, (_, i) => ({
      month: `Month ${i + 1}`,
      electricity: (monthlyUsage * (1 + Math.random() * 0.1)).toFixed(2), // Simulate slight variations
    }));
    setFutureConsumption(predictions);

    // Provide feedback
    if (monthlyUsage > 400) {
      setFeedback("⚠️ Your electricity usage is quite high. Consider reducing usage during peak hours and optimizing appliance efficiency.");
    } else if (monthlyUsage > 300) {
      setFeedback("🌿 Your usage is moderate. Try switching to energy-efficient appliances or increasing renewable energy sources.");
    } else {
      setFeedback("✅ Excellent! Your energy usage is below average. Keep up the good work!");
    }
  };

  // Prepare data for the graph
  const chartData = {
    labels: [...energyHistory.map((d) => d.date), ...futureConsumption.map((d) => d.month)],
    datasets: [
      {
        label: "Electricity Usage (kWh)",
        data: [...energyHistory.map((d) => d.electricity), ...futureConsumption.map((d) => d.electricity)],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="energy-tracker">
      <h3>🔋 Energy Usage Tracker</h3>
      <div className="tracker-section">
        {/* Historical Data Table */}
        <div className="history-table">
          <h4>Historical Energy Data</h4>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Electricity (kWh)</th>
                <th>Renewables (%)</th>
                <th>Cost ($)</th>
              </tr>
            </thead>
            <tbody>
              {energyHistory.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.electricity}</td>
                  <td>{record.renewables}</td>
                  <td>{record.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Prediction Section */}
        <div className="predict-section">
          <h4>Future Energy Consumption</h4>
          <div className="input-group">
            <label>Enter Monthly Usage (kWh):</label>
            <input
              type="number"
              value={monthlyUsage}
              onChange={(e) => setMonthlyUsage(Number(e.target.value))}
              placeholder="e.g., 350"
            />
            <button onClick={handlePredict}>Predict</button>
          </div>
          <div className="feedback">{feedback}</div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="graph-section">
        <line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              title: { display: true, text: "Energy Usage: Historical and Future Predictions" },
              legend: { display: true, position: "top" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default EnergyTracker;
