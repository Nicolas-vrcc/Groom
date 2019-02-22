# Groom - Open chat rooms

## Start Express server

1. `npm install`
2. Create a Mongo database name `chatio` on localhost on port `27017`.
3. `cp .env.sample .env` and change values to match your settings
4. `npm run server` to start development server
5. Make API calls to [http://localhost:5000/api](http://localhost:5000/api)

## Start React client

1. `cd client`
2. `npm install`
3. `cp .env.sample .env` and change values to match your settings
4. `npm start` to start development server
5. Open [http://localhost:3000](http://localhost:3000) on your browser

## Start server and client together

* `npm start` for the development server
* `cd client && npm run build` to create a client build. Then `npm start` from the root of the project, and open [http://localhost:5000](http://localhost:5000) on your browser
