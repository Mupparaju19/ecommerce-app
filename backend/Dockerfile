# Step 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

RUN npm install

# Now copy the rest of the frontend code
COPY . .  # ✅ FIX: Copy everything inside frontend/

RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
