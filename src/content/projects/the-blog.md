---
title: My Blog
description: My personal blog, where I write about various topics such as programming, technology, and other interests of mine.
stack:
    - SvelteKit
    - Tailwind
    - Remark
    - Rehype
    - Vercel
category: Web -- Fullstack
imageUrl: /res/projects/joshibrom-blog.png
feature: true
date: Dec 31, 2023
deployments:
    - name: blog.joshuaibrom.com (Vercel)
      href: https://blog.joshuaibrom.com
repos:
    - name: GitHub
      href: https://github.com/joshibrom/blog.joshuaibrom.com
---

## About

This is my personal blog, where I write about various topics such as programming, technology, and other interests of mine. I've
long wanted to have a blog and had found previous attempts to fail to deliver either the experience I wanted in building a blog
or felt too locked-in. As such, I decided to build my own blog from scratch, using SvelteKit as the framework, TailwindCSS for
styling, and Vercel for deployment. Other technologies used include Remark and Rehype for parsing and transforming markdown
content.

## Features

- Allows for the creation of blog posts using markdown
- Blog posts contain tags and the website features a tag-based search system
- LaTeX support for mathematical notation (this one was important to me)

## Tech Stack

### Frontend

- The frontend is built with Svelte and Markdown documents.
- TailwindCSS is used for styling.

### Backend

- SvleteKit's serverless functions are used for the backend to render the blog posts.

### Deployment

- Deployment is handled by Vercel, my preferred deployment platform.
