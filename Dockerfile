FROM node:16.14.2-alpine3.14

WORKDIR /project

# COPY ./app/package.json .
# COPY ./app/package-lock.json .

RUN npm install -g @angular/cli

EXPOSE 4200
