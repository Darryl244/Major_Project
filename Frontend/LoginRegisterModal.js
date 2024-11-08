import React, { useState } from 'react';
import './LoginRegisterModal.css';
import axios from 'axios';

const LoginRegisterModal = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    // Sign-up function
    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                name,
                email,
                password,
            });
            alert(response.data.message);
            setIsLogin(true); // Switch to login form on success
        } catch (error) {
            console.error('Registration error:', error);
            alert(error.response?.data?.message || 'Error during registration');
        }
    };

    // Login function
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });
            alert(response.data.message);
            onClose(); // Close the modal on successful login
        } catch (error) {
            console.error('Login error:', error);
            alert(error.response?.data?.message || 'Invalid credentials');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>✕</button>

                <div className="tabs">
                    <button
                        className={`tab ${isLogin ? 'active' : ''}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`tab ${!isLogin ? 'active' : ''}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign up
                    </button>
                </div>

                {isLogin ? (
                    <form className="login-form" onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="submit-button">Log In</button>
                    </form>
                ) : (
                    <form className="register-form" onSubmit={handleSignUp}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Re-enter Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="submit-button">Sign Up</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginRegisterModal;
