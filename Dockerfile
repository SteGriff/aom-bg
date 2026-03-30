# Build stage
FROM node:24-alpine AS build
WORKDIR /app
COPY ./package.json .

# Trouble with vite when doing npm ci, so full install
RUN npm i
COPY . .
RUN npm run build
