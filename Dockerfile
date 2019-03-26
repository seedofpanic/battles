FROM node:10-alpine

WORKDIR /battles

ENTRYPOINT [ "npm", "start" ]