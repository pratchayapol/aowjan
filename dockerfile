# Use an official Node.js image as a base image
FROM node:20 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN npm run build

# Use an official NGINX image as the final image
FROM nginx:alpine

# Copy the built app from the builder stage to the NGINX web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf


# Expose port 80
EXPOSE 80

# Start NGINX when the container runs
CMD ["nginx", "-g", "daemon off;"]
