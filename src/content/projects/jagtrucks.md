---
title: JagTrucks
description: A basic proof-of-concept website for allowing students at the TAMU-SA campus to more easily find which food trucks are on campus on a given day, and more.
stack:
    - React
    - Bootstrap
    - Node
    - Express
    - Mongodb
category: Web -- Fullstack
imageUrl: /res/projects/jag-trucks.png
feature: true
date: Jul 17 2022
deployments:
repos:
    - name: GitHub (Frontend)
      href: https://github.com/joshibrom/wad-JagTrucks
    - name: GitHub (Backend)
      href: https://github.com/joshibrom/wad-JagTrucks-backend
---

## About

JagTrucks is a website that would enable users to view the various food truck offerings available on campus at Texas A&M University - San Antonio.
This web app was created by myself and my partner [Ryan Kasper (@rhinodino23)](https://github.com/rhinodino23) as part of the Web Application Development course that we were taking over the Summer 2, 2022 semester.
Please keep in mind that as such, this application was forced to follow set constraints, both in terms of the tech stack that was used, as well as the time available for development.

## Features

- User accounts and authentication (albeit insecure)
- A user may have a cart of food truck items
- Food truck menus are able to be dynamically displayed
- A weekly calendar to view the food trucks on campus for a given week.

## Tech Stack

### Frontend

- React as the main UI framework.
- Bootstrap as the main source of styled components and CSS rules.

### Backend

- Node server running Express with Mongoose for the database connection.
- A MongoDB instance running on MongoDB Atlas.

### Deployment

- Deployed to Heroku (before Heroku decided that it could not afford to keep hosting projects like mine and others).

## Constraints

Being that this project was the semester project for a course, there were certain constraints that were placed:

- MongoDb was required.
- An Express backend was required.
- Bootstrap was the preferred way of styling components and handling CSS. (I personally would have gone with Tailwind)
