# blanja-api

Simple, easy implementation of the private web API.

## About The Project

API build in [Express.js](https://expressjs.com/) and [MySQL](https://www.mysql.com/)

### Prerequisites

- [npm](https://nodejs.org/en/download/)
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/bayue48/natasha-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   This will install the dependencies inside `node_modules`

### MySQL configuration

Please create database and make the changes in the `/src/config/db.js` file.

```js 
host: YOUR_HOSTNAME,
user: YOUR_DBUSERNAME,
password: YOUR_DBPASSWORD,
database: YOUR_DBNAME,
```

### Usage

`node index`

Runs the app in the development mode.<br>
Open [http://yourhostname:8000/](http://localhost:8000/) to view it in the browser.

### Endpoint

- Get all nilai mahasiswa
```sh
GET
/nilai/all
```
- Get all nilai rata-rata mahasiswa
```sh
GET
/nilai/rata
```
- Get all nilai rata-rata jurusan
```sh
GET
/nilai/jurusan
```
- Add nilai baru
```sh
POST
/nilai
```
- Edit nilai
```sh
PATCH
/nilai/:id
```
- Delete nilai
```sh
DELETE
/nilai/:id
```
- Login user
```sh
POST
/auth/login
```
- Register
```sh
POST
/auth/register
```

### Documentation

For more info visit [Postman](https://documenter.getpostman.com/view/13522642/TzY1jHDG)

## License

Distributed under the MIT License.
