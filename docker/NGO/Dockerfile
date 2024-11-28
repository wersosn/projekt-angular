FROM node:22-alpine AS build

WORKDIR /ngo

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

CMD ["ng", "serve"] 
#, "--host", "0.0.0.0"]

EXPOSE 4200