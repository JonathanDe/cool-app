FROM node:20.9-alpine AS build
ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

FROM nginx:1.21.3-alpine AS production
ENV NODE_ENV production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]