# Step 1: Use official Node.js image
FROM node:16 AS build

WORKDIR /app
COPY ./backend/product-service/package.json ./backend/product-service/package-lock.json ./
RUN npm install
COPY ./backend/product-service /app
RUN npm run build

# Step 2: Start the server
EXPOSE 5000
CMD ["npm", "start"]
