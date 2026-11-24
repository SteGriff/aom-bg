# Build stage
FROM node:24-alpine AS build
WORKDIR /app
COPY ./package.json .

# Trouble with vite when doing npm ci, so full install
RUN npm i
COPY . .
RUN npm run build

# Host stage
FROM nginx:1.30.8-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
