import React, { useState } from 'react';

const CarbonOffsetCalculator = () => {
  const [carbonFootprint, setCarbonFootprint] = useState('');
  const [treesRequired, setTreesRequired] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCarbonFootprint(value);
    calculateOffset(value);
  };

  const calculateOffset = (footprint) => {
    if (footprint && !isNaN(footprint)) {
      const trees = (footprint / 10).toFixed(2); // Example: 10kg CO2 per tree
      setTreesRequired(trees);
    } else {
      setTreesRequired(0);
    }
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f1f1f1', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ textAlign: 'center', color: '#333', marginBottom: '1rem' }}>Offset Your Carbon Footprint</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <input
          type="number"
          value={carbonFootprint}
          onChange={handleInputChange}
          placeholder="Enter your carbon footprint (kg CO2)"
          style={{
            padding: '0.8rem',
            fontSize: '1rem',
            width: '70%',
            borderRadius: '5px',
            border: '1px solid #ddd',
            marginRight: '1rem',
            outline: 'none',
            transition: '0.3s ease',
          }}
        />
        <button
          onClick={() => calculateOffset(carbonFootprint)}
          style={{
            padding: '0.8rem 1.2rem',
            fontSize: '1rem',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: '#fff',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Calculate
        </button>
      </div>
      {treesRequired > 0 && (
        <p style={{ textAlign: 'center', color: '#333', fontSize: '1.2rem' }}>
          Based on your carbon footprint of {carbonFootprint} kg CO2, you can offset this by planting {treesRequired} trees.
        </p>
      )}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => window.open('https://example.com/https://www.weforum.org/stories/2019/06/what-is-carbon-offsetting/')}
          style={{
            padding: '0.8rem 1.5rem',
            fontSize: '1rem',
            border: 'none',
            backgroundColor: '#2196F3',
            color: '#fff',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginTop: '1rem',
          }}
        >
          Learn More about Carbon Offsets
        </button>
      </div>
    </div>
  );
};

export default CarbonOffsetCalculator;