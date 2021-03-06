# Dev Arcade

To install dependencies for React:

```sh
cd client
yarn # or npm install
```

To install dependencies for Express:

```sh
cd server
yarn # or npm install
```

To run the client:

```sh
cd client
yarn start # or npm start
```

To run the server:

```sh
cd server
cp .env.example .env
code .env # put in your database values and session secret
npm run dev
```


## While developing

### Creating an API with express

Your express code will be the same as before, with two changes:

- You'll add `/api` to the beginning of your route paths
- You'll return JSON instead of rendering templates. (Unless you need non-react pages for anything - such as a splash page.)

#### Accept JSON form data

Add this near the top of your `index.js`:

```js
app.use(express.json());
```

#### Prefix your routes

Instead of:

```js
app.use('/ping', pingRouter);
```

Add a `/api` to the beginning:

```js
app.use('/api/ping', pingRouter);
```

This is important both while developing and deploying. You're differentiating the routes for your front-end from those used by the backend. Anything that starts with `/api` will be handled by express. Everything else is a route for your front-end (including static images, css, etc.)

#### Send back JSON

Instead of `res.render()`, you'll set a `.status()` and send back `.json()`

```js
    console.log("API: ");
    res.status(200).json({
      message: "Created new todo",
      id
    });
```

#### Testing with Postman

To make sure your express app is returning the JSON you expect at the `/api` routes, use Postman to send Requests. Confirm that the Responses include the data you expect.

### Automatically sending AJAX requests to express

On the React side of your project, [add a `proxy` field to your `package.json` ](https://create-react-app.dev/docs/proxying-api-requests-in-development/).

It should point to your local express server's URL:

```json
  "proxy": "http://localhost:4000",
```

This tells the React Dev Server to forward any AJAX requests to that address.

Your `fetch` or `axios` calls should look like this:

```js
const resp = await fetch("/api/ping");
```

*DO NOT* include `http://localhost:4000` in your `fetch` or `axios` calls.

If you do, you'll have to search/replace when you deploy.

In case you missed that:

*DO NOT* include `http://localhost:4000` in your `fetch` or `axios` calls.

Customize the `proxy` URL so that it matches the port express is listening on. 

You might find it useful to add a PORT to the .env that express uses. Make sure to do this in your express app:

```js
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    // ...
})
```

Also: *DO NOT* include `http://localhost:4000` in your `fetch` or `axios` calls.

