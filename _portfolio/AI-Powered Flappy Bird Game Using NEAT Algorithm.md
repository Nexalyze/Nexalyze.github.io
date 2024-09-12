---
title: "AI-Powered Flappy Bird Game Using NEAT Algorithm"
excerpt: "An AI powered Flappy Bird Using NEAT (NeuroEvolution of Augmenting Topologies) algorithm.<br/><img src='/images/Flappy3D.webp'>"
collection: portfolio
---

![Flappy](/images/flappy.png){: .align-center width="400px"}


The project aims to create an AI agent that autonomously plays Flappy Bird by applying the NEAT (NeuroEvolution of Augmenting Topologies) algorithm, which evolves neural networks over generations to enhance performance.

### Key Components:

1. **Game Setup**: 
   - Developed using Pygame for game mechanics, including loading bird, pipe, background, and base assets.

2. **Classes**:
   - **Bird**: Handles movement, animation, and collision detection.
   - **Pipe**: Manages pipe positioning and movement.
   - **Base**: Represents the ground, with methods for movement and rendering.

3. **NEAT Algorithm**:
   - Neural networks receive inputs like the bird’s position and distance to pipes and output whether the bird should jump.
   - Performance is evaluated based on survival and successful pipe navigation.
   - The population of neural networks evolves over 50 generations, refining their decision-making.

### Execution:
The NEAT algorithm trains the AI agent by optimizing its neural network across generations, resulting in improved gameplay performance.

**Outcome**: The AI agent successfully learns to play the game through neural network evolution, with the best network emerging after 50 generations. 

You can find the project [here](https://github.com/sourish-ml/AI-Powered-Flappy-Bird-Game-Using-NEAT-Algorithm).