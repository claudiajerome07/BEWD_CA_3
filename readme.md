# BEWD CA 

## github link:

https://github.com/claudiajerome07/BEWD_CA_3


## Description on how to run the project:

1. Initialise server.js file.

2. Install express and jsonwebtoken.

3. Import express and jsonwebtoken in server.js file.

4. Initialise the server on server.js file.

5. Create api endpoints for login and employee dashboard.

6. To run the code, in terminal give "node server.js or npx nodemon server.js".

7. Now open postman and for login route:
    - select post method and give localhost ("http://localhost:8080/login").
    - Enter employee Id and password in the body.
    - As a response it will give a token.
    
8. For dashboard route:
    - select get method and give localhost as ("http://localhost:8080/dashboard").
    - If the token is valid it will give a response as ("message": "Welcome to your Employee Dashboard") or else it will give response as ("error": "Unauthorized").