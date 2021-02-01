ARG NODE_VERSION=current
FROM node:${NODE_VERSION}-slim

LABEL author="anupam.jagatdeo@publicissapient.com"
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production
COPY . ./
RUN npm run build

EXPOSE 8080

CMD ["npx", "serve", "-s", "build", "-l", "8080"]