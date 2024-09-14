# Description: Dockerfile for the frontend application

# Use an official node image as the base image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app using the production build
CMD ["npx", "serve", "-s", "build", "-l", "3000"]