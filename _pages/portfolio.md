---
layout: archive
title: "My Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
  .accordion-container {
    max-width: 800px;
    margin: 0 auto;
  }
  .project-accordion {
    background-color: #1E3D58;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .project-accordion:hover {
    background-color: #2980b9;
  }
  .project-panel {
    padding: 0 18px;
    background-color: #f1f1f1;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
  .project-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 5px;
    margin-top: 10px;
  }
  .project-description {
    color: #333;
    margin: 10px 0;
  }
  .project-categories {
    font-style: italic;
    color: #666;
    margin: 10px 0;
  }
  .project-links a {
    display: inline-block;
    padding: 5px 10px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin: 5px 5px 5px 0;
    transition: background-color 0.3s ease;
  }
  .project-links a:hover {
    background-color: #2c3e50;
  }
</style>

<div class="accordion-container">
  {% for project in site.data.projects %}
    <button class="project-accordion">{{ project.title }}</button>
    <div class="project-panel">
      <img class="project-image" src="{{ project.image }}" alt="{{ project.title }}">
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

<script>
  var acc = document.getElementsByClassName("project-accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
</script>