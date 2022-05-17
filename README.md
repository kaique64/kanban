# Kanban API
> Organize your daily tasks

This API makes it possible organize tasks easier and with friendly responses. You can create groups and we are responsible for specific tasks.

## Dependencies
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://www.docker.com/compose/)

## Prerequisites
Clone the project:
```sh
git clone https://github.com/kaique64/kanban.git && cd kanban
```
First of all you need to build the docker image with the command below:
```sh
docker-compose build
```
And install the dependencies:
```sh
yarn
# OR
npm install
```
After that, you need the environments variables:
- Copy the .env.example and rename it to `.env`.
- Add all values for the environments variables.

## Getting started
Now, you need to run the migrations:
```sh
yarn prisma migrate deploy
# OR
npx prisma migrate deploy
```
And, now, run the application:
```sh
# To run the application locally
yarn dev
# OR
npm run dev

# To run with Docker
docker-compose up -d

# To run with Docker and see the logs
docker-compose up
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.
