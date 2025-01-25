# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

# Expose port 3000 for the application
EXPOSE 4000

CMD ["node", "app.js"]