FROM node:10.15.0-alpine as builder
WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . ./
RUN yarn build

FROM node:10.15.0-alpine
RUN yarn global add serve
COPY --from=builder /usr/src/app/build .
EXPOSE 80
CMD serve -p 80 -s .