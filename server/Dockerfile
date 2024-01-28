# Use an official Node.js image as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code into the container
COPY . .

# Expose the port your app will run on (assuming it's 3001)
EXPOSE 8080

# Define the command to run your app
CMD ["npm", "start"]
