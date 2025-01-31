# Step 1: Use official Node.js image
FROM node:16 AS build

WORKDIR /app
COPY ./backend/package.json ./backend/package-lock.json ./
RUN npm install
COPY ./backend /app
RUN npm run build

# Step 2: Start the server
EXPOSE 5000
CMD ["npm", "start"]
