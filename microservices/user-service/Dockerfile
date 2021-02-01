# Latest Build of Node version
ARG NODE_VERSION=current
FROM node:${NODE_VERSION}-slim
FROM nestjs/cli
LABEL author="anupam.jagatdeo@publicissapient.com"
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --only=production
COPY . ./
RUN npm run build
CMD [ "npm", "run", "start:prod" ]