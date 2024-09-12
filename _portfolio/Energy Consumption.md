---
title: "Energy Consumption Model"
excerpt: "<br/><img src='/images/Energy.2jpg'>"
collection: portfolio
---

![Energy Consumption](/images/Energy1.jpg){: .align-center width="400px"}

# Energy Consumption Model

This project builds a model to predict energy consumption using features such as building type, area, solar usage, electric demand, and natural gas usage.

### Steps Involved:
1. **Data Preprocessing**:
   - Imported libraries: pandas, matplotlib, numpy.
   - Selected relevant columns and handled missing values by dropping rows with null entries.
   - Split the data into features (X) and the target variable (y).

2. **Encoding**:
   - Applied label encoding to convert categorical features into numerical values.

3. **Data Splitting**:
   - Divided the dataset into training and test sets using an 80-20 split.

4. **Model Training**:
   - Trained a Random Forest Regressor with 1007 estimators and a random state of 17.

5. **Model Evaluation**:
   - Achieved an R² score of 77.92% accuracy on the test set.

### Conclusion:
The model effectively predicts energy consumption based on multiple factors, offering insights for optimizing energy usage and management.

You can explore the project [here.](https://github.com/sourize/EnergyConsumption)