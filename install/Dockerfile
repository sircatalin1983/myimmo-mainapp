FROM node:12-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .
RUN npm install --save --only=production

COPY . .
EXPOSE 4200

CMD ["npm", "run", "start:test"]
