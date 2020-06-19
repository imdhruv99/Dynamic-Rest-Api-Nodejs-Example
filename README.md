# Dynamic API Generation

- This is the simplest implementation of Dynamic Api Generation using Node js.

# Projects Methodology

- ```server.js``` file containes ```function route()```. THe route function will check what type of api fired, if it's 
type of student and if student is available in ```/api/``` path then it will check for method, That what kind of HTTP Method 
is with that perticular api,
- If method is one of the GET, POST, PUT and DELETE than it will respond with json written in that api's javascript file.

# Modules
- http
- url

- Project Does not contain any Database, you can modify the project with your own equirement.
- If you want to create new api, than create it's functionality under the ```/api/``` folder and access that api with file name.

# Routes

- If i want to access any  api which is present in ```/api/``` folder...
- Then route will be like ```method = [GET, POST, PUT, DELETE] http://localhost:7500/api/<FileName>
- In Our case if i want to fire student api and method is GET than ```http://localhost:7500/api/student```
- you can also change directory and make new directory as per your requirement.

# Author
- D H R U V  &nbsp; P R A J A P A T I

# Thank You!