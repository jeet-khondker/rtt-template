# 🔥 Executable Commands

## Database Server (JSON Server) Execution

```sh
cd project-name
json-server --watch db.json
```

## Database Server (JSON Server) Execution URL Endpoint

```sh
http://localhost:3000
```

## Client Server Execution

```sh
cd frontend
yarn start
```

## Client Server Execution URL Endpoint

> Client Server will be executing on another port other than `3000` because Database Server (JSON Server) is using the port `3000`.

```sh
http://localhost:3001/
```

## ESLint Execution

```sh
cd frontend
yarn eslint . --config eslint.config.mjs
```