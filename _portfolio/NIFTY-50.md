---
title: "NIFTY-50 Model"
excerpt: "<img src='/images/nift50epg.jpg'>"
description: "A Predictive Model to predict Nifty-50 Stock."
categories: 
  - ML Model
collection: portfolio
---

![Nifty-50](/images/nifty50.png){: .align-center width="400px"}

**The Nifty 50 Stock Prediction Using Machine Learning**

This project aims to develop a machine learning model that predicts the next day's opening price of Nifty 50 stocks, leveraging historical data. A Random Forest Regressor is used to provide insights that can help traders and investors.

### Key Features:

1. **Data Collection & Preprocessing**:
   - **Data Sources**: Historical stock data from trusted financial databases.
   - **Cleaning**: Handled missing values and outliers.
   - **Feature Engineering**: Created features such as previous day's opening, closing, high, low prices, and volume.

2. **Model Selection & Training**:
   - **Algorithm**: Random Forest Regressor (ensemble method of decision trees to improve accuracy and reduce overfitting).
   - **Training**: Split data into training and testing sets, tuned hyperparameters for optimal performance.

3. **Evaluation**:
   - **Metrics**: Used Mean Squared Error (MSE) and R-squared (R²) to assess the model's accuracy.
   - **Results**: High prediction accuracy with a strong correlation between predicted and actual stock prices.

### Tools & Technologies:
- **Programming**: Python
- **Libraries**: Scikit-Learn, Pandas, NumPy, Matplotlib
- **Model**: Random Forest Regressor

**Conclusion**: The model accurately predicts Nifty 50 stock opening prices, offering valuable insights for data-driven decision-making in stock trading. 

You can explore the project [here.](https://github.com/sourish-ml/The-Nifty-50-Stock-Prediction-using-Machine-Learning).