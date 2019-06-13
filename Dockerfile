FROM node:10.15.0-alpine as builder
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./
RUN yarn build

FROM node:10.15.0-alpine
RUN yarn global add serve
COPY --from=builder /usr/src/app/build .
EXPOSE $PORT
CMD serve -p $PORT -s .