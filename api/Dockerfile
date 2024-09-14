# Description: This is the Dockerfile for the backend service. It builds the image for the backend service and runs it in a container.

# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Create a directory for the database
RUN mkdir -p ./db && chmod -R 777 ./db

# Copy the rest of the application code
COPY . .

# Expose the port your API will run on
EXPOSE 5000

# Run database migrations (Knex migrations)
RUN npx knex migrate:latest

# Start the Node.js application
CMD ["npm", "start"]