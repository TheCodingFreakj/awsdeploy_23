FROM node:15-alpine3.10
ENV NODE_ENV production
LABEL version="1.0"
LABEL description="This is the base docker image for Humaine frontend react app."
LABEL maintainer = ["admin@pallavipriya.online", "affliatemarkpro@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]


RUN npm install --production

COPY --chown=node:node . .

USER node

EXPOSE 80
EXPOSE 5432
CMD "npm" "start"