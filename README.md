# Groom - Open chat rooms

## Start Express server

1. `npm install`
2. Create a Mongo database name `chatio` on localhost on port `27017`.
3. `cp .env.sample .env` and change values to match your settings
4. `npm start`
5. Make API calls to [http://localhost:5000/api](http://localhost:5000/api)

## Start React client

1. `cd client`
2. `npm install`
3. `npm start`
4. Open [http://localhost:3000](http://localhost:3000) on your browser
5. To logout: Chrome Devtools > Application > Cookies > delete `groom-token`