# Todo list express

## Description

This is a simple todo list app using express and mongoDB

## prerequisite

1. nodejs
2. npm
3. mongoDB

## how to run

1. clone the repo
2. run `npm install`
3. run `npm run dev` or `npm start`
4. this app available on `http://localhost:3000`

## API DOCUMENTATION

### AUTHENTICATION

#### Register

##### Request

```http
POST /api/v1/users/register
```

##### Body

```json
{
  "name": "raja saputera",
  "email": "rajasaputeraxii.ipa1@gmail.com",
  "password": "the password"
}
```

##### Response

```json
{
  "status": "success",
  "token": "this is your token",
  "data": {
    "user": {
      "role": "user",
      "_id": "655182118d56d308f8ee0620",
      "name": "raja saputera",
      "email": "rajasaputeraxii.ipa1@gmail.com",
      "__v": 0
    }
  }
}
```

#### Login

##### Request login

```http
POST /api/v1/users/login
```

##### Body login

```json
{
  "email": "rajasaputeraxii.ipa5@gmail.com",
  "password": "the password"
}
```

##### Response login

```json
{
  "status": "success",
  "token": "this is your token",
  "data": {
    "user": {
      "role": "user",
      "_id": "655174449fc75724fce7920a",
      "name": "raja saputera",
      "email": "rajasaputeraxii.ipa5@gmail.com",
      "__v": 0
    }
  }
}
```

### TODO

#### Create todo

##### Request create todo

```http
POST /api/v1/todos
```

##### Body create todo

```json
{
  "title": "todo terbaru",
  "description": "tugas ku hari ini"
}
```

##### Response create todo

```json
{
  "status": "success",
  "data": {
    "data": {
      "completed": false,
      "_id": "655179e369b667045804f334",
      "title": "todo terbaru",
      "description": "tugas ku hari ini",
      "createdAt": "2023-11-13T01:20:35.368Z",
      "__v": 0
    }
  }
}
```

#### Get all todo

##### Request get all todo

```http
GET /api/v1/todos
```

##### Response get all todo

```json
{
  "status": "success",
  "results": 1,
  "data": {
    "data": [
      {
        "completed": false,
        "_id": "65517fc08d56d308f8ee061a",
        "title": "todo terbaru",
        "description": "tugas ku hari ini",
        "createdAt": "2023-11-13T01:45:36.879Z",
        "__v": 0
      }
    ]
  }
}
```

#### Get todo by id

##### Request get todo by id

```http
GET /api/v1/todos/:id
```

##### Response get todo by id

```json
{
  "status": "success",
  "data": {
    "data": {
      "completed": false,
      "_id": "65517fc08d56d308f8ee061a",
      "title": "todo terbaru",
      "description": "tugas ku hari ini",
      "createdAt": "2023-11-13T01:45:36.879Z",
      "__v": 0
    }
  }
}
```

#### Update todo by id

##### Request update todo by id

```http
PATCH /api/v1/todos/:id
```

##### Body update todo by id

```json
{
  "title": "todo terbaru",
  "description": "tugas ku hari ini",
  "completed": true
}
```

##### Response update todo by id

```json
{
  "status": "success",
  "data": {
    "data": {
      "completed": true,
      "_id": "65517fc08d56d308f8ee061a",
      "title": "todo update",
      "description": "tugas ku hari ini",
      "createdAt": "2023-11-13T01:45:36.879Z",
      "__v": 0
    }
  }
}
```

#### Delete todo by id

##### Request delete todo by id

```http
DELETE /api/v1/todos/:id
```

##### Response delete todo by id

status 204 no content

#### Delete all todo

##### Request delete all todo

```http
DELETE /api/v1/todos
```

##### Response delete all todo

status 204 no content
