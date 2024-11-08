import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';
import LoginRegisterModal from './LoginRegisterModal';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSelectCrop = () => {
    navigate('/select-crop');
  };

  const handleSelectRegion = () => {
    navigate('/select-region');
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      {/* Login/Register Button */}
      <button className="login-register-btn" onClick={openModal}>
        Login/Register
      </button>

      {showModal && <LoginRegisterModal onClose={closeModal} />}

      <div className="box">
        <h1>Welcome to the Crop Prediction System</h1>
        <div style={{ marginTop: '40px' }}>
          <h2>Select Crop</h2>
          <p className="description">
            Choose a crop from the list to get predictions for the best regions to grow it.
          </p>
          <button onClick={handleSelectCrop}>Select Crop</button>
        </div>
        <div style={{ marginTop: '40px' }}>
          <h2>Select Region</h2>
          <p className="description">
            Select a region to get crop recommendations based on local conditions.
          </p>
          <button onClick={handleSelectRegion}>Select Region</button>
        </div>
      </div>
      <footer>&copy; 2024 Crop Prediction System</footer>
    </div>
  );
};

export default WelcomePage;
