---
title: "AI-Powered Flappy Bird Game Using NEAT Algorithm"
excerpt: "<br>Flappy Bird<br/><img src='/images/flappy.webp'>"
collection: portfolio
---


**Objective:**
To develop an AI agent that can play the Flappy Bird game autonomously using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm for neural network evolution. [GITHUB](https://github.com/Nexalyze/AI-Powered-Flappy-Bird-Game-Using-NEAT-Algorithm)

**Description:**
This project utilizes the NEAT algorithm to train a neural network that controls the bird in the Flappy Bird game. The AI agent learns to navigate through pipes by evolving its neural network over multiple generations.

**Steps Involved:**

1. **Setup and Initialization:**
   - Pygame is used for game development, providing graphics and event handling.
   - Game window and fonts are initialized.
   - Game assets, including bird images, pipe images, background, and base images, are loaded and scaled.

2. **Bird Class:**
   - Represents the bird in the game, with attributes for position, velocity, tilt, and animation.
   - Methods for jumping, moving, drawing, and getting a collision mask are implemented.

3. **Pipe Class:**
   - Represents the pipes in the game, with attributes for position, height, and gap.
   - Methods for setting height, moving, drawing, and checking for collision with the bird are implemented.

4. **Base Class:**
   - Represents the moving ground at the bottom of the game window.
   - Methods for moving and drawing the base are implemented.

5. **Utility Functions:**
   - `blitRotateCenter` for rotating the bird image around its center.
   - `draw_window` for rendering the game window, including the bird, pipes, base, and score.

6. **NEAT Algorithm:**
   - `eval_genomes` function evaluates each genome (neural network) by running the game and assigning fitness scores based on performance.
   - Birds controlled by the neural networks are initialized, and the game loop runs until all birds die or the user quits.
   - Neural networks receive inputs (bird's y position, distance to top and bottom pipes) and output a jump decision.
   - Fitness scores are adjusted based on the bird's survival and pipe passage.

7. **Running the NEAT Algorithm:**
   - `run` function loads the NEAT configuration and initializes the population.
   - The NEAT algorithm evolves the population over 50 generations, optimizing the neural networks to improve game performance.
   - The best-performing genome (neural network) is printed at the end of the run.

8. **Execution:**
   - The `run` function is called with the path to the NEAT configuration file, starting the training process.

**Conclusion:**
The project successfully demonstrates the use of the NEAT algorithm to train a neural network for playing the Flappy Bird game. The AI agent learns to navigate through the pipes by evolving its neural network over multiple generations, achieving improved performance with each generation. The trained model can be further refined and tested for real-time performance in the game.
