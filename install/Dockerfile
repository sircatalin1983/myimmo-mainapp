# base image
FROM node:12.2.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --only=production
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app

EXPOSE 4200

CMD ["npm", "run", "start:test"]

# start app
# CMD ng serve --port=4500 --proxy-config proxy.conf-test.js --host 0.0.0.0 --disableHostCheck true
#CMD cross-env NODE_OPTIONS=--max_old_space_size=8192 ng serve --configuration=test -- --host=0.0.0.0 --disable-host-check --port=4500 --proxy-config proxy.conf-test.js --base-href /
# CMD ng serve --host 0.0.0.0