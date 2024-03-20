# syntax=docker/dockerfile:1

FROM node:20
ENV NODE_ENV=production
LABEL maintainer="a.drenyasova@innopolis.university"

RUN useradd -ms /bin/bash app

RUN mkdir -p /app
WORKDIR /app

COPY . .
RUN npm install

USER app

CMD [ "npm", "start" ]