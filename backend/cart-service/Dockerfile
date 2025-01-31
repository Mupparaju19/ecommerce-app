# Step 1: Use official Node.js image
FROM node:16 AS build

WORKDIR /app
COPY ./backend/cart-service/package.json ./backend/cart-service/package-lock.json ./
RUN npm install
COPY ./backend/cart-service /app
RUN npm run build

# Step 2: Start the server
EXPOSE 5001
CMD ["npm", "start"]
