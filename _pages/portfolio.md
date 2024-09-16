---
layout: archive
title: "My Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
  .masonry-container {
    column-count: 3;
    column-gap: 20px;
    padding: 20px;
  }
  .project-card {
    break-inside: avoid;
    background-color: #1E3D58;
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
  .project-image {
    width: 100%;
    height: auto;
  }
  .project-info {
    padding: 15px;
  }
  .project-title {
    color: #3498db;
    margin-top: 0;
  }
  .project-description {
    color: #e0e0e0;
    font-size: 0.9em;
  }
  .project-categories {
    font-style: italic;
    color: #bbb;
    margin: 10px 0;
  }
  .project-links a {
    display: inline-block;
    padding: 5px 10px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-right: 10px;
    transition: background-color 0.3s ease;
  }
  .project-links a:hover {
    background-color: #2c3e50;
  }
  @media (max-width: 1000px) {
    .masonry-container {
      column-count: 2;
    }
  }
  @media (max-width: 600px) {
    .masonry-container {
      column-count: 1;
    }
  }
</style>

<div class="masonry-container">
  {% for project in site.data.projects %}
    <div class="project-card">
      <img class="project-image" src="{{ project.image }}" alt="{{ project.title }}">
      <div class="project-info">
        <h2 class="project-title">{{ project.title }}</h2>
        <p class="project-description">{{ project.description }}</p>
        <p class="project-categories"><strong>Categories:</strong> {{ project.categories | join: ", " }}</p>
        <div class="project-links">
          {% for link in project.links %}
            <a href="{{ link.url }}">{{ link.text }}</a>
          {% endfor %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>