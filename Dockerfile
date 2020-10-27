FROM node:lts-alpine


RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories

RUN apk update
RUN apk add --no-cache  make gcc g++ git python

WORKDIR /home
COPY . /home/
COPY .env /home/.env

RUN yarn

RUN rm -f .npmrc

EXPOSE 3333
CMD ["yarn", "start"]
