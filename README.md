# Scholaro API Service

![NestJS](https://img.shields.io/badge/-NestJs-ea2845?style=flat-square&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgresql](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white)

## Table of Contents

1. [Pre-requisites](#pre-requisites)
2. [Running the swagger documentation](#running-the-swagger-documentation)

### Pre-requisites

I am assuming you already have your preferred code editor, I am using VSCode, you can use your favorite code editor if you like. I am using postgresql as my database for this project, therefore, you need to install it and setup your own database.

If you don't want to setup postgres in your machine, you can install **docker** instead, there is a **docker-compose.yaml** file in the project root along with the **docker.env** file. You can use that to spin up a **postgres container** and a **pgadmin container**.

To spin up the containers, open a terminal, go to the root of the project and run the command below.

```bash
docker-compose up -d
```

This will download the docker images if not yet available and create the containers after pulling the images.

Below is an example of my local environment.

```javascript
PORT = 5000;
DATABASE_URL =
  "postgresql://admin:admin@localhost:5432/scholaro-db?schema=public";
JWT_ACCESS_SECRET = "JwtAccessSecret";
JWT_REFRESH_SECRET = "JwtRefreshSecret";
```

### Running the swagger documentation

To run the swagger documentation, if you followed the port in my example **.env** variable, you can go to http://localhost:5000/api
