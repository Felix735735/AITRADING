import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>AI Exchange Market</h1>
    <p>AI-powered trading platform with personalized insights and market intelligence.</p>
    <Link to="/signup">Get Started</Link>
  </div>
);

export default Landing;