
FROM node:12.14.0-alpine

WORKDIR /app

RUN apk add --no-cache git yarn python g++ bash make

COPY package.json package-lock.json ./

RUN npm install

COPY . .
ENV PORT $PORT
EXPOSE $PORT

CMD [ "npm", "start" ]
