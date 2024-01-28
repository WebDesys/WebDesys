# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code into the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight Node.js image for the production environment
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the build output from the build image
COPY --from=build /app/build ./build

# Expose the port your app will run on (assuming it's 3000)
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
