import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Calculator.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CarbonFootprintCalculator = () => {
  const [transportation, setTransportation] = useState({ carMiles: 0, bikeMiles: 0, publicTransportMiles: 0, carAge: 0 });
  const [energy, setEnergy] = useState({ kWh: 0, renewable: 0 });
  const [food, setFood] = useState({ meatMeals: 0, vegMeals: 0 });
  const [waste, setWaste] = useState({ kgWaste: 0 });
  const [water, setWater] = useState({ liters: 0 });

  const calculateFootprint = () => {
    const transportFootprint =
      transportation.carMiles * 0.411 +
      transportation.publicTransportMiles * 0.05 +
      transportation.bikeMiles * 0.02;

    const energyFootprint = energy.kWh * 0.92 - energy.renewable * 0.3;
    const foodFootprint = food.meatMeals * 10.0 + food.vegMeals * 2.0;
    const wasteFootprint = waste.kgWaste * 0.5;
    const waterFootprint = water.liters * 0.003;

    return transportFootprint + energyFootprint + foodFootprint + wasteFootprint + waterFootprint;
  };

  const calculateVehicleCO2 = (carMiles, carAge) => {
    const emissionPerMile = carAge < 5 ? 0.411 : carAge >= 10 ? 0.512 : 0.460; // Adjusted emissions based on age of car
    return carMiles * emissionPerMile;
  };

  const getTips = () => {
    return {
      transportation: "Consider carpooling or switching to public transport to reduce car emissions.",
      energy: "Switch to energy-efficient appliances and increase the use of renewable energy.",
      food: "Reduce meat consumption and incorporate more plant-based meals.",
      waste: "Recycle more and minimize single-use plastics.",
      water: "Fix leaks and use water-efficient appliances to save water.",
    };
  };

  const getSuggestions = (totalFootprint) => {
    if (totalFootprint > 1000) {
      return "Consider reducing your car travel and switching to renewable energy for a significant reduction.";
    } else if (totalFootprint > 500) {
      return "Try using more public transportation and eating more plant-based foods.";
    } else {
      return "Great job! Continue maintaining sustainable habits.";
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".calculator-display");
    const buttons = document.querySelectorAll(".button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.textContent;
  
        if (button.classList.contains("clear")) {
          display.value = ""; // Clear display
        } else if (button.classList.contains("equal")) {
          try {
            display.value = eval(display.value.replace("×", "*").replace("÷", "/")); // Evaluate
          } catch (e) {
            display.value = "Error";
          }
        } else if (button.classList.contains("operation")) {
          display.value += ` ${value} `; // Add operation
        } else {
          display.value += value; // Add number
        }
      });
    });
  });
  

  const chartData = {
    labels: ['Transportation', 'Energy', 'Food', 'Waste', 'Water'],
    datasets: [
      {
        label: 'Carbon Footprint (kg CO2)',
        data: [
          transportation.carMiles * 0.411 +
            transportation.publicTransportMiles * 0.05 +
            transportation.bikeMiles * 0.02,
          energy.kWh * 0.92 - energy.renewable * 0.3,
          food.meatMeals * 10.0 + food.vegMeals * 2.0,
          waste.kgWaste * 0.5,
          water.liters * 0.003,
        ],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
    ],
  };

  const tips = getTips();
  const totalFootprint = calculateFootprint();
  const vehicleCO2 = calculateVehicleCO2(transportation.carMiles, transportation.carAge);

  return (
    <div className="calculator">
      <h1>Advanced Carbon Footprint Calculator</h1>

      {/* Transportation Inputs */}
      <div className="input-group">
        <label>Car Miles/Month:</label>
        <input
          type="number"
          placeholder="Miles driven in a car per month"
          value={transportation.carMiles}
          onChange={(e) => setTransportation({ ...transportation, carMiles: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Car Age (in years):</label>
        <input
          type="number"
          placeholder="Age of the car in years"
          value={transportation.carAge}
          onChange={(e) => setTransportation({ ...transportation, carAge: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Public Transport Miles/Month:</label>
        <input
          type="number"
          placeholder="Miles traveled via public transport per month"
          value={transportation.publicTransportMiles}
          onChange={(e) =>
            setTransportation({ ...transportation, publicTransportMiles: e.target.value })
          }
        />
      </div>
      <div className="input-group">
        <label>Bike Miles/Month:</label>
        <input
          type="number"
          placeholder="Miles biked per month"
          value={transportation.bikeMiles}
          onChange={(e) => setTransportation({ ...transportation, bikeMiles: e.target.value })}
        />
      </div>

      {/* Energy Inputs */}
      <div className="input-group">
        <label>Electricity Consumption (kWh/month):</label>
        <input
          type="number"
          placeholder="Electricity used in kWh per month"
          value={energy.kWh}
          onChange={(e) => setEnergy({ ...energy, kWh: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Renewable Energy Usage (%):</label>
        <input
          type="number"
          placeholder="Percentage of renewable energy used"
          value={energy.renewable}
          onChange={(e) => setEnergy({ ...energy, renewable: e.target.value })}
        />
      </div>

      {/* Food Inputs */}
      <div className="input-group">
        <label>Meals with Meat/Month:</label>
        <input
          type="number"
          placeholder="Number of meals with meat per month"
          value={food.meatMeals}
          onChange={(e) => setFood({ ...food, meatMeals: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Meals without Meat/Month:</label>
        <input
          type="number"
          placeholder="Number of meals without meat per month"
          value={food.vegMeals}
          onChange={(e) => setFood({ ...food, vegMeals: e.target.value })}
        />
      </div>

      {/* Waste Inputs */}
      <div className="input-group">
        <label>Waste Generated (kg/month):</label>
        <input
          type="number"
          placeholder="Total waste generated in kg per month"
          value={waste.kgWaste}
          onChange={(e) => setWaste({ ...waste, kgWaste: e.target.value })}
        />
      </div>

      {/* Water Inputs */}
      <div className="input-group">
        <label>Water Usage (liters/month):</label>
        <input
          type="number"
          placeholder="Total water used in liters per month"
          value={water.liters}
          onChange={(e) => setWater({ ...water, liters: e.target.value })}
        />
      </div>

      {/* Results */}
      <div className="result">
        <h2>Your Total Carbon Footprint: {totalFootprint.toFixed(2)} kg CO2</h2>
        <h2>Your Vehicle's CO2 Emissions: {vehicleCO2.toFixed(2)} kg CO2</h2>
        <p>{getSuggestions(totalFootprint)}</p>
        <h4>Tips for Reducing Carbon Footprint:</h4>
        <ul>
          <li>{tips.transportation}</li>
          <li>{tips.energy}</li>
          <li>{tips.food}</li>
          <li>{tips.waste}</li>
          <li>{tips.water}</li>
        </ul>
      </div>

      {/* Graph */}
      <div className="graph">
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: { title: { display: true, text: 'Carbon Footprint Breakdown' } },
          }}
        />
      </div>
    </div>
  );
};

export default CarbonFootprintCalculator;