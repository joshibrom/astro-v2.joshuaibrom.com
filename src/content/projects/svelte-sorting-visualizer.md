---
title: Svelte Sorting Visualizer
description: A basic web application allowing a user to view various common sorting algorithms in use.
stack:
    - Svelte
category: Web -- Frontend
imageUrl: /res/projects/svelte-sorting-visualizer.png
feature: true
date: Sep 04 2023
deployments:
    - name: Vercel
      href: https://sorting-with-svelte.vercel.app/
repos:
    - name: GitHub
      href: https://github.com/joshibrom/sorting-with-svelte
---

## About

This web application was built with the goal of making it easier to visualize how sorting algorithms work.
The current algorithms supported by this webapp are Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort, and Heap Sort.
The application was built using Svelte and TypeScript and relies heavily on the Svelte store system to manage state, as well as the
JavaScript `Promise` API to create a delay between each step of the sorting algorithm (to allow for visualization). This, such as with
[my last sorting visualizer](https://www.joshuaibrom.com/projects/dig/angular-sorting-visualizer), is not the most efficient way to do
the animations, but this method is much less resource-intensive than the previous method in which I'd store each step of the sorting
algorithm in a list and then iterate through the list to animate the sorting.

## Tech Stack

### Frontend

- Svelte for the UI.
- TypeScript for the algorithms.
- Vanilla CSS for styles.

### Deployment

- Deployed to Vercel.
