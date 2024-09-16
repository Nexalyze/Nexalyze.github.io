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
    max-width: 1200px;
    margin: 0 auto;
  }
  .project-card {
    break-inside: avoid;
    background-color: #1E3D58;
    border-radius: 15px;
    margin-bottom: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
  .project-image-container {
    position: relative;
    width: 100%;
    padding-top: 66.67%; /* 3:2 Aspect Ratio */
    overflow: hidden;
  }
  .project-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  .project-card:hover .project-image {
    transform: scale(1.05);
  }
  .project-info {
    padding: 20px;
  }
  .project-title {
    color: #3498db;
    margin-top: 0;
    font-size: 1.4em;
    margin-bottom: 10px;
  }
  .project-description {
    color: #e0e0e0;
    font-size: 0.9em;
    margin-bottom: 15px;
    line-height: 1.4;
  }
  .project-categories {
    font-style: italic;
    color: #bbb;
    margin-bottom: 15px;
    font-size: 0.85em;
  }
  .project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .project-links a {
    padding: 8px 12px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 0.9em;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  .project-links a:hover {
    background-color: #2c3e50;
    transform: translateY(-2px);
  }
  @media (max-width: 1200px) {
    .masonry-container {
      column-count: 2;
    }
  }
  @media (max-width: 768px) {
    .masonry-container {
      column-count: 1;
    }
  }
</style>

<div class="masonry-container">
  {% for project in site.data.projects %}
    <div class="project-card">
      <div class="project-image-container">
        <img class="project-image" src="{{ project.image }}" alt="{{ project.title }}">
      </div>
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