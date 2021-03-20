FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .
RUN npm install --save

COPY . .
EXPOSE 4200

CMD ["npm", "run", "start:test"]
