# Stage 1: Build the React application
FROM nikolaik/python-nodejs:latest as build-stage

# Set environment to production
ENV NODE_ENV production

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of your app's source code
COPY . .

# Build your React application
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine as production-stage

# Copy the built app from the previous stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx and serve the static files
CMD ["nginx", "-g", "daemon off;"]
