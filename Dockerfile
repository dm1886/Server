# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies based on the environment variable
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; then \
        npm install; \
    else \
        npm install --only=production; \
    fi

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV PORT=3002

# Expose the port the app runs on
EXPOSE $PORT

# Define the command to run the application
CMD ["npm", "run", "dev"]  # Use npm run dev to start with nodemon in development mode