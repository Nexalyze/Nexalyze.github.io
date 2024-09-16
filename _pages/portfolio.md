---
layout: archive
title: "My Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
  .carousel-container {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
  .carousel {
    display: flex;
    transition: transform 0.5s ease;
  }
  .project-card {
    flex: 0 0 100%;
    background-color: #1E3D58;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .project-image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .project-title {
    color: #3498db;
  }
  .project-description {
    max-width: 600px;
    margin: 10px 0;
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
    margin: 5px;
    transition: background-color 0.3s ease;
  }
  .project-links a:hover {
    background-color: #2c3e50;
  }
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0,0,0,0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  .carousel-button.prev { left: 10px; }
  .carousel-button.next { right: 10px; }
</style>

<div class="carousel-container">
  <div class="carousel">
    {% for project in site.data.projects %}
      <div class="project-card">
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
    {% endfor %}
  </div>
  <button class="carousel-button prev">&lt;</button>
  <button class="carousel-button next">&gt;</button>
</div>

<script>
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  function showProject(index) {
    const offset = index * -100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + {{ site.data.projects.size }}) % {{ site.data.projects.size }};
    showProject(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % {{ site.data.projects.size }};
    showProject(currentIndex);
  });
</script>