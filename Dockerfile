FROM node:boron

WORKDIR /eslint-config-fusion

COPY package.json yarn.lock /eslint-config-fusion/
RUN yarn

COPY . .
