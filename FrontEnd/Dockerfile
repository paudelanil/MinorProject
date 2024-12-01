# Use Node.js as base image
FROM node:16 

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

#  Copy the rest of the app
COPY . /app

# Build the app
RUN npm run build

#  Install serve to serve the built React app
RUN npm install -g serve

#  Expose port 3000
EXPOSE 3000
# Set the command to serve the app
CMD ["serve", "-s", "build", "-l", "3000"]



