# AbortApiRequest

Using Axios Cancel and AbortController for Fetch, we can cancel/abort request if required

  - The server is built using Express, cd server then npm start to run the server
  - The React app is built using CRA, cd client then npm start
  
# Making Request

The requests are made in the client/src/App.js file.

# Api files

There are two types of request being made one usinf axios and other using fetch. 
They are kept in the client/src/apis folder 

  - api.js contains the Fetch example
  - axiosInstance.js contains the Axios example


# Project cloned (by Savita Chauhan) from :

ARTICLE: https://medium.datadriveninvestor.com/aborting-cancelling-requests-with-fetch-or-axios-db2e93825a36
SOURCE CODE FROM: https://github.com/devAbhimanyu/AbortApiRequest

### How to run:
- The project has 'server' and 'client' projects; `yarn install` both server and client separately.
- `yarn start` server, then `yarn start` client 

### What it contains:
- This project demonstrates **canceling a Request** in 4 scenarios:
  - GET using fetch api (using AbortController)
  - GET using axios api (using CancelToken - *deprecated*)
  - POST using axios api (using CancelToken - *deprecated*)
  - POST using axios api (using AbortController)

### Axios documentation:
https://github.com/axios/axios#request-config
