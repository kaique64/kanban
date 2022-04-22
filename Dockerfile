FROM node:16.14.2-alpine
WORKDIR /app
COPY package*.json /
COPY .env ./
COPY . .
COPY /src/infra/orm/prisma prisma
EXPOSE 5000
RUN npm install
RUN npm run build
RUN npx prisma generate
ENTRYPOINT [ "npm", "start" ]
