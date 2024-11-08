import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectCropPage.css';

const SelectCropPage = () => {
  const [selectedCrop, setSelectedCrop] = useState('');
  const navigate = useNavigate();

  // List of predefined crops
  const crops = [
    'rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas', 'mothbeans',
    'mungbean', 'blackgram', 'lentil', 'pomegranate', 'banana', 'mango',
    'grapes', 'watermelon', 'muskmelon', 'apple', 'orange', 'papaya', 
    'coconut', 'cotton', 'jute', 'coffee'
  ];

  // Function to capitalize the first letter of each word
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleCropChange = (e) => {
    setSelectedCrop(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`Selected Crop: ${selectedCrop}`);
  };

  const handleSelectRegion = () => {
    navigate('/select-region');
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Select Crop</h2>
        <select value={selectedCrop} onChange={handleCropChange}>
          <option value="">--Select a Crop--</option>
          {crops.map((crop, index) => (
            <option key={index} value={crop}>
              {capitalizeFirstLetter(crop)}
            </option>
          ))}
        </select>
        <div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleSelectRegion}>Select Region</button>
        </div>
      </div>
    </div>
  );
};

export default SelectCropPage;
