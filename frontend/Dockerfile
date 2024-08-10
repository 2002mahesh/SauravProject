# Step 1: Build the Vite application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN npm run build

# Debug: List files in /app/dist
RUN ls -la /app/dist

# Step 2: Serve the application using http-server
FROM node:18

# Install http-server globally
RUN npm install -g http-server

# Set the working directory
WORKDIR /app

# Copy the build artifacts from the previous stage
COPY --from=build /app/dist /app/dist

# Expose port 8080
EXPOSE 8080

# Start http-server
CMD ["http-server", "dist", "-p", "8080"]
