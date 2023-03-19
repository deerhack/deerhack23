FROM node:18-alpine

WORKDIR /app

COPY app/package.json app/yarn.lock /app/

RUN yarn 

COPY app/ /app

RUN yarn prisma generate

RUN yarn build

CMD ["yarn", "start"]
