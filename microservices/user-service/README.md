## User Microservice

User microservice manages the lifecylce of a user for **Audit Tool**. The microservice is responsible for handling Audit Tool **User Role Management**.

### Usage

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

### User Schema

```js
User: {
  _id: string,
  name: string,
  email: string,
  llId: string,
  role: string
}
```

```js
UserRoles {
  'SUPERADMIN',
  'ADMIN',
  'REVIEWER',
  'COLLABORATOR',
  'MEMBER',
}
```

### REST ENDPOINTS

Below are the rest endpoint which the microservice handles

| OPERATION | ENDPOINT          | DETAILS                      | Request Body                                    | Response Body    |
| --------- | ----------------- | ---------------------------- | ----------------------------------------------- | ---------------- |
| GET       | /users            | Get All users                |                                                 | `User[]`         |
| GET       | /users?role=ROLE  | Get All users based on Roles |                                                 | `User[]`         |
| GET       | /users/:llId      | Get User By LLID             |                                                 | `User`           |
| POST      | /users            | Create a new user            | `{ name: string, email: string, llId: string }` | `User`           |
| PATCH     | /users/:llId/role | Update Role by LLID          | `{role: UserRole }`                             | `{ ok: number }` |

### DOCKER-COMPOSE

```bash
# Build Docker Images
docker-compose build

# Start User Service # Exposed on PORT NO: 3001
docker-compose up

# Stop Service
docker-compose down
```

### CI
The application has built in CI with GitLab runners. 
The docker image gets created when all the CI stages are passed and the image is pushed to Azure Container Registry.

### DEPLOYMENT

```bash

# SETTING UP DATABASE
kubectl create -f mongodb.db.yaml

# SETTING UP USER SERVICE
kubectl create -f user-service.deploy.yaml

```
