FROM node:21-slim

RUN apt update && apt install -y openssl procps

RUN npm install -g @nestjs/cli@11.0.1

WORKDIR /home/node/app

USER node

CMD tail -f /dev/null