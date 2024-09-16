---
layout: archive
title: "My Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
  .portfolio-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 30px 0;
  }
  .project-card {
    position: relative;
    width: 300px;
    height: 400px;
    perspective: 1000px;
    cursor: pointer;
  }
  .project-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .project-card:hover .project-card-inner {
    transform: rotateY(180deg);
  }
  .project-card-front, .project-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    overflow: hidden;
  }
  .project-card-front {
    background-color: #1E3D58;
  }
  .project-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .project-title {
    margin: 15px 0;
    color: #ffffff;
    font-size: 1.2em;
  }
  .project-description {
    color: #e0e0e0;
    font-size: 0.9em;
    padding: 0 15px;
  }
  .project-categories {
    margin-top: 10px;
    font-style: italic;
    color: #bbb;
  }
  .project-links a {
    display: inline-block;
    padding: 8px 15px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin: 10px 5px;
    transition: background-color 0.3s ease;
  }
  .project-links a:hover {
    background-color: #2c3e50;
  }
</style>

<div class="portfolio-container">
  {% for project in site.data.projects %}
    <div class="project-card">
      <div class="project-card-inner">
        <div class="project-card-front">
          <img class="project-image" src="{{ project.image }}" alt="{{ project.title }}">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
        </div>
        <div class="project-card-back">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-categories"><strong>Categories:</strong> {{ project.categories | join: ", " }}</p>
          <div class="project-links">
            {% for link in project.links %}
              <a href="{{ link.url }}">{{ link.text }}</a>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>