FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/kena-mem

COPY ["package.json", "package-lock.json*", "./"]
RUN yarn install --silent && yarn build && mv node_modules ../
COPY ./dist .
RUN chown -R node /usr/src/kena-mem
USER node
CMD ["node", "dist/main.js"]
