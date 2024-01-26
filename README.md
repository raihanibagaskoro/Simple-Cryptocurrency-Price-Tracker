installation

1. Server
    - ```cd Server```
    - ```npm install```
    - ```npm i sequelize-cli```
    - ```npm i nodemon -g```
    - ```npx sequelize db:migrate```
    - Create .env file in the root of Server Folder and add the following variables: - ```JWT_SECRET=""```
    - ```nodemon app.js```

2. Client 
    - ```cd ../Client```
    - ```cd my-app```
    - ```npm install```
    - ```npm start```