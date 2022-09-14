FROM node:16.17-alpine as base

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
EXPOSE 3333
RUN yarn
COPY . /
CMD ["yarn", "dev"]