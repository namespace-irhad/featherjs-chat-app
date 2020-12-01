# Docker and Featherjs Playground (Real-time chat application)

- __Database__: Postgres
- __ORM__: Objection
- __Authentication__: Google (via Feather generation)
- __Client__ : React

* Start the app with npm start in client and server, docker-compose up in server

## Steps
* [x] Dockerize Postgresql (docker-compose.yml)
    ```
    docker-compose up
    ```
* [x] npm i -g featherjs, generate feather app
    ```
    mkdir feathers-chat
    cd feathers-chat/
    feathers generate app
        - feathers generate service
    ```
* [x] Add dotenv and .env file
    ```
    npm i dotenv
    ```
* [x] Google authentication in server/src/authentication.js
* [ ] Connect React app and Server
* [ ] Finish Frontend (Material UI, Styled-components?)
* [ ] Add additional tables, saving users input (optional?)


## Additional
* [ ] Dockerize backend server
* [ ] Host
