I have build this project using the following tecj:

1. React
2. Redux Tool Kit
3. MUI for templating
4. JSON-Server for Server activities

Follwing steps to run the project

Clone the code and run as follow

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm i json-server`

### `json-server --watch db.json --port 5004`

Runs the JSON server on the localhost:5000, I have created a file call db.json in the root dir of this project, this would ideally use that file for all server activites

there are 2 user try to login by both:

1. Admin user (User: admin, Password: admin) - Had Admin Access
2. Standard user (User: atandard Password: standard) - Doesn't has Admin Access
