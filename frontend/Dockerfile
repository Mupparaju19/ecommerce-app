# Use Node.js as the build stage
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY frontend/package.json frontend/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend directory
COPY frontend/ ./

# Build the frontend
RUN npm run build

# Use Nginx for serving the built React app
FROM nginx:alpine

# Copy built React files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
