### ALC Docker Node
Using Docker to run Node.js application and database on different nodes.


### Structure of the app
- The `web-site` directory contains the application node, database node, along with a Dockerfile to create application node image. 
- The `docker-compose.yml` file is meant to build contaners (for application, mongoDB, and adminmongoDB) and their images respectively.


### Installation

- Install Docker and MongoDB on your system.
- Fork the repository into your favourite directory.  
- Navigate to the directory of the repository and run `docker-compose build` to build the container, images and install dependences.
- Run `docker-compose up` to run the application and access `http://localhost:3000/` in your browser.  


### Usage
- You can access the data by navigating to `http://localhost:3000/` and `http://localhost:3000/users`. 




