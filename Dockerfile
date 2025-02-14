# Build Stage
FROM node:22-alpine

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY package.json .

RUN npm install

# Copying all the files in our project
COPY . .

EXPOSE 3000

# Starting our application
CMD ["npm","start"]