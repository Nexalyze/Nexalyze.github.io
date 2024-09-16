---
layout: archive
title: "My Project Journey"
permalink: /portfolio/
author_profile: true
---

<style>
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
  }
  .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #2c3e50;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
  .project-container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }
  .project-container::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: #3498db;
    border: 4px solid #2c3e50;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  .left {
    left: 0;
  }
  .right {
    left: 50%;
  }
  .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid #1E3D58;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #1E3D58;
  }
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid #1E3D58;
    border-width: 10px 10px 10px 0;
    border-color: transparent #1E3D58 transparent transparent;
  }
  .right::after {
    left: -16px;
  }
  .project-content {
    padding: 20px 30px;
    background-color: #1E3D58;
    position: relative;
    border-radius: 6px;
    color: white;
    transition: all 0.3s ease;
  }
  .project-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
  .project-image {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 15px;
  }
  .project-title {
    margin-top: 0;
    color: #3498db;
  }
  .project-description {
    font-size: 0.9em;
    margin-bottom: 15px;
  }
  .project-categories {
    font-style: italic;
    color: #bbb;
    margin-bottom: 15px;
  }
  .project-links a {
    display: inline-block;
    padding: 8px 15px;
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
  @media screen and (max-width: 600px) {
    .timeline::after {
      left: 31px;
    }
    .project-container {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }
    .project-container::before {
      left: 60px;
      border: medium solid #1E3D58;
      border-width: 10px 10px 10px 0;
      border-color: transparent #1E3D58 transparent transparent;
    }
    .left::after, .right::after {
      left: 15px;
    }
    .right {
      left: 0%;
    }
  }
</style>

<div class="timeline">
  {% for project in site.data.projects %}
    <div class="project-container {% cycle 'left', 'right' %}">
      <div class="project-content">
        <img class="project-image" src="{{ project.image }}" alt="{{ project.title }}">
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