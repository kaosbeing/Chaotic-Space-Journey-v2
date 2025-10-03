# Use Node.js 22 as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install --ignore-scripts

COPY src src

# Expose port 3000 for the React app
EXPOSE 3000
