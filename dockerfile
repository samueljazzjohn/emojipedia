# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the production-ready version of the app
RUN npm run build

# Set the environment variable for the port to use
ENV PORT=3000

# Expose the port used by the application
EXPOSE $PORT

# Start the application
CMD ["npm", "start"]
