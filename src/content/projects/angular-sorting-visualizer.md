---
title: Angular Sorting Visualizer
description: A basic web application allowing a user to view various common sorting algorithms in use.
stack:
    - Angular
    - Sass
category: Web -- Frontend
imageUrl: /res/projects/sorting-visualizer.png
feature: false
date: Mar 10 2022
deployments:
    - name: Github Pages
      href: https://joshibrom.github.io/Sorting-Visualizer
repos:
    - name: GitHub
      href: https://github.com/joshibrom/sorting-visualizer
---

## About

This web application was built with the goal of making it easier to visualize how sorting algorithms work.
The current algorithms supported by this webapp are Bubble Sort, Quick Sort, Merge Sort, and Heap Sort.
Please keep in mind that due to the way that the application was programmed some algorithms unfortunately do not show all that well.
This is something that I may work on improving some day.

It was rather difficult attempting to create a method in which sorting is able to be visualized, but the solution that I settled upon was to perform the sorts and to track state with a list of the transactions occurring during the sort.
I am aware that this is inefficient and resource-heavy in the memrory department, but this was the solution that I had come up with and I've not touched the codebase since deployment.

## Tech Stack

### Frontend

- Angular for the UI.
- TypeScript for the algorithms.
- Sass for styles.

### Deployment

- Deployed to GitHub Pages.
