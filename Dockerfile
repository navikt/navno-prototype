FROM node:18-alpine

WORKDIR /app

RUN apk --no-cache add curl

COPY package.json /app
COPY node_modules /app/node_modules
COPY build /app/build
COPY server/app.js /app/server/app.js

EXPOSE 3123
CMD ["npm", "run", "start"]
