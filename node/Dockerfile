FROM node:21.7.1 as builder

WORKDIR /usr/src/app

COPY ./index.js /usr/src/app/

RUN chown -R node:node /usr/src/app/

RUN npm install express

RUN npm install mysql

RUN npm install node-random-name

RUN apt-get update 

RUN apt-get install -y wget

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

