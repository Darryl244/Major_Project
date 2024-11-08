import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectRegionPage.css';

const SelectRegionPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const navigate = useNavigate();

  // List of predefined regions
  const regions = [
    "Sangli", "Satara", "Solapur", "Kolhapur", "Pune", "Akola", "Amravati",
    "Aurangabad", "Beed", "Jalna", "Osmanabad", "Nanded", "Latur", "Parbhani", 
    "Hingoli", "Bhandara", "Chandrapur", "Gadchiroli", "Gondia", "Nagpur", 
    "Wardha", "Ahmednagar", "Dhule", "Jalgaon", "Nandurbar", "Nashik", 
    "Mumbai City district", "Mumbai Suburban district", "Thane", "Palghar", 
    "Raigad", "Ratnagiri", "Sindhudurg", "Buldhana", "Yavatmal", "Washim"
  ];

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`Selected Region: ${selectedRegion}`);
  };

  const handleSelectCrop = () => {
    navigate('/select-crop');
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Select Region</h2>
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="">--Select a Region--</option>
          {regions.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
        <div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleSelectCrop}>Select Crop</button>
        </div>
      </div>
    </div>
  );
};

export default SelectRegionPage;
