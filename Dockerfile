# Use an official Node.js runtime as a parent image
FROM node

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY package.json .

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
CMD ["node", "index.js"]