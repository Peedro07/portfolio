FROM node:16-buster

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ./ /home/app/

RUN npm install --production
RUN npm install -g serve
RUN npm run build

ENV NODE_ENV production

CMD [ "serve", "-s", "build", "-l", "3000"]