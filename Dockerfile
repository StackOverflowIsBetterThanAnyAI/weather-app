FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

ARG REACT_APP_API_KEY

ENV REACT_APP_API_KEY=$REACT_APP_API_KEY

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]