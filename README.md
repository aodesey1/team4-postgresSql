Team 4

Packages needed for postgresSql:

- postgres.js: (https://github.com/porsager/postgres)
- React for the front end. (https://react.dev/)
- Express and Node for the middleware. (https://expressjs.com/)
Getting everything ready:
```
npm install postgres.js
```



Postgres.js example code:
```javascript
import postgres from 'postgres'

const sql = postgres({ /* options */ }) // will use psql environment variables

export default sql
```


Steps needed in order to read data from dvdrental
- Front end will make a request.
- Express will process the request.
- postgres.js will make calls to the backend use sql query strings in order to read data from dvdrental.
- postgres.js will return the data as a json object.
- Website may also optionally be hosted on an AWS S3 bucket
