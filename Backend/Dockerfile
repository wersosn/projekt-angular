FROM node:22-alpine AS build

WORKDIR /backend

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

CMD ["node", "app.js"]

EXPOSE 3000