# About

JaVi is a platform that has as objective leave saved movies and series that you already watch or you want to watch.

# Technologies

- Back-end: Node
- Database: MongoDB
- Front-end: React

# Instalation

This repo contains 2 projects (api and front), and you need to install all dependencies from each one, so enter in each folder project and run:

```bash
# /javi/api
npm i

# /javi/front
npm i
```

You will also need create a `.env` file inside the api folder with the follow enviroment variables:

- JWT_SECRET: a string that will be used by Jason Web Token, for tests I use `secret`
- SALT_ROUNDS: a integer that will be used by bcryptjs, for tests I use `10`
- MONGO_URI: the MongoDB url, I recomend use `mongodb://localhost:27017/javi`
- API_PORT: the port where the api will run, I recomend use `3001`

# Running

Remember, the api uses MongoDB to store data, so you will need him installed and executing. After that, we just need to run the api and front, and the React will open the application on your browser.

```bash
# /javi/api
npm start

# /javi/front
npm start
```

# VSCode Configs

The `.vscode` folder contains a set of configurations, that run the prettier based on the `.prettierrc` file, and it's also configurated to run nodemon on debugger, to do that just run the following command inside the VSCode terminal.

```bash
# /javi/api
npm run debug
```

After that just press `F5` and select the `node --inspect src` option.
