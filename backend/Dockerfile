# Step 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

RUN npm install

# Now copy the rest of the frontend code
COPY ./src /app/src
COPY ./public /app/public

RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine3.15

# Copy build from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
