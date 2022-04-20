FROM node:16.14.2-alpine
WORKDIR /app
COPY . .
COPY package*.json /
EXPOSE 5000
RUN npm install
RUN npm run build
ENTRYPOINT [ "npm", "start" ]
