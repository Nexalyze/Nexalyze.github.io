---
layout: archive
title: "My Portfolio"
permalink: /portfolio/
author_profile: true
---

<!-- Grid Container for Portfolio -->
<style>
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
    padding: 30px;
  }
  .project-card {
    border: 2px solid #ddd;
    padding: 20px;
    background-color: #1E3D58;
    border-radius: 22px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    overflow: hidden;
  }
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  .project-image {
    width: 100%;
    border-radius: 18px;
    transition: transform 0.3s ease;
  }
  .project-card:hover .project-image {
    transform: scale(1.05);
  }
  .project-title {
    margin-top: 15px;
    font-size: 1.2em;
    color: #ffffff;
  }
  .project-description {
    color: #e0e0e0;
    font-size: 0.9em;
  }
  .project-categories {
    margin-top: 10px;
    font-style: italic;
    color: #bbb;
  }
  .project-links {
    margin-top: 15px;
  }
  .project-links a {
    display: inline-block;
    padding: 5px 10px;
    background-color: #2980b9;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-right: 10px;
    transition: background-color 0.3s ease;
  }
  .project-links a:hover {
    background-color: #3498db;
  }
</style>

<div class="portfolio-grid">
  <!-- First Project -->
  <div class="project-card">
    <img class="project-image" src='/images/Flappy3D.webp' alt="AI-Powered Flappy Bird Game">
    <h3 class="project-title"><a href="/posts/2024/07/AI-Powered Flappy Bird Game Using NEAT Algorithm/">AI-Powered Flappy Bird Game</a></h3>
    <p class="project-description">An AI powered Flappy Bird Using NEAT (NeuroEvolution of Augmenting Topologies) Algorithm</p>
    <p class="project-categories"><strong>Categories:</strong> AI, Game</p>
    <div class="project-links">
      <a href="https://github.com/sourize/AI-Powered-Flappy-Bird-Game-Using-NEAT-Algorithm">Code</a>
    </div>
  </div>

  <!-- Second Project -->
  <div class="project-card">
    <img class="project-image" src='/images/DA.jpg' alt="Data Analysis of NIFTY 50 Dataset">
    <h3 class="project-title"><a href="/posts/2024/08/Data Analysis of Nifty 50/">Data Analysis of NIFTY 50 Dataset</a></h3>
    <p class="project-description">A Analysis of Nifty 50 Stocks over the years.</p>
    <p class="project-categories"><strong>Categories:</strong> Data Analysis</p>
    <div class="project-links">
      <a href="https://github.com/sourize/Data-Analysis-of-NIFTY-50-Dataset">Code</a>
      <a href="https://github.com/sourize/Data-Analysis-of-NIFTY-50-Dataset/blob/main/DataAnalysis_on_Nifty%2050.pdf">PDF</a>
    </div>
  </div>

  <!-- Third Project -->
  <div class="project-card">
    <img class="project-image" src='/images/Energy2.jpg' alt="Energy Consumption Model">
    <h3 class="project-title"><a href="/posts/2024/07/Energy Consumption Model/">Energy Consumption Model</a></h3>
    <p class="project-description">A Predictive Model to predict Energy Consumption based on some features as input.</p>
    <p class="project-categories"><strong>Categories:</strong> ML Model</p>
    <div class="project-links">
      <a href="https://github.com/sourize/EnergyConsumption">Code</a>
    </div>
  </div>

  <!-- Fourth Project -->
  <div class="project-card">
    <img class="project-image" src='/images/nift50epg.jpg' alt="NIFTY-50 Model">
    <h3 class="project-title"><a href="/posts/2024/05/The Nifty 50 Stock Prediction Using Machine Learning/">NIFTY-50 Model</a></h3>
    <p class="project-description">A Predictive Model to predict Nifty-50 Stock.</p>
    <p class="project-categories"><strong>Categories:</strong> ML Model</p>
    <div class="project-links">
      <a href="https://github.com/sourize/The-Nifty-50-Stock-Prediction-using-Machine-Learning">Code</a>
    </div>
  </div>

  <!-- Fifth Project -->
  <div class="project-card">
    <img class="project-image" src='/images/RealEstate2.jpg' alt="Real Estate Price Prediction">
    <h3 class="project-title"><a href="/posts/2024/07/Real Estate Price Prediction Using Machine Learning/">Real Estate Price Prediction Using Machine Learning</a></h3>
    <p class="project-description">A Predictive Model to predict Real Estate Price based on some features as input.</p>
    <p class="project-categories"><strong>Categories:</strong> ML Model</p>
    <div class="project-links">
      <a href="https://github.com/sourize/Real-Estate-Price-Prediction-Using-Machine-Learning">Code</a>
    </div>
  </div>

  <!-- Sixth Project -->
  <div class="project-card">
    <img class="project-image" src='/images/Restaurant1.jpg' alt="Restaurant Review Sentiment Analysis">
    <h3 class="project-title"><a href="/posts/2024/07/Restaurant Review Sentiment Analysis Model/">Restaurant Review Sentiment Analysis Model</a></h3>
    <p class="project-description">An NLP Model to predict whether a review is positive or negative.</p>
    <p class="project-categories"><strong>Categories:</strong> NLP, ML Model</p>
    <div class="project-links">
      <a href="https://github.com/sourize/Restaurant-Review-Sentiment-Analysis-Model">Code</a>
    </div>
  </div>
</div>