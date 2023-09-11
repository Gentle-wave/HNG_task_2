# HNG_task_2

# Person API

The Person API is a simple RESTful API that allows you to perform CRUD operations on person records.
This document provides detailed instructions on how to set up, run, and use the API.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Known Limitations and Assumptions](#known-limitations-and-assumptions)

## Prerequisites
Before setting up and running the API, ensure you have the following prerequisites installed on your machine:
- Node.js and npm
- PostgreSQL (for local development)

## Getting Started

1. Clone the GitHub repository:

2. Create or modify the sxixting .env file in the project root directory with the following content.
- DATABASE_URL=your_production_database_url
- DIALECT=postgres
- HOST=localhost
- PORT=5432
- USER=your_username
- PASSWORD=your_password
- DATABASE=your_local_database_name
- SSL=false
 
NOTE: this code asumes you habe a postgresqldatabase already in your local machine.  
3. This file will store your environment-specific configuration settings. Modify it based on your requirements:

4. npm install
5. npm run dev(nodemon was used in production)
6. The API will be accessible at
- http://localhost:PORT/api OR
- https://hng-task-2-i324.onrender.com/api



