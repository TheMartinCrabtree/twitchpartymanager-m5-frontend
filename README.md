
# Twitch Party Manager

Twitch Party Manager allows Twitch.tv viewers to use their Twitch account credentials to sign up for online events that created by their favorite broadcaster. The frontend logic is developed using React.js, and is styled using the Bulma CSS Framework. The backend utilizes a Ruby on Rails API and a PostgreSQL database. Oauth2 credentials are handled using the New Twitch API (https://dev.twitch.tv/docs/api/), and token requests are performed in the Rails backend. 

Check out this video demo: https://youtu.be/cAir01pT2oc

## Backend: https://github.com/TheMartinCrabtree/twitchpartymanager-m5-backend

## Frontend: https://github.com/TheMartinCrabtree/twitchpartymanager-m5-frontend

# Created Using:
* Ruby on Rails API
* PostgreSQL
* New Twitch API (Oauth2)
* React.js
* Bulma CSS Framework (react-bulma-components)

# To run:

## Frontend
*  To run a local copy  in development mode navigate to the project directory and run `npm start`.
*  The default address is http://localhost:3006
*  To develop a production build navigate to the project directory and run `npm run build`

## Backend
*   Activate your local  PostgreSQL database. 
*  To install and start the backend API, navigate to the project directory and run ‘bundle’
*  Run ‘rails s’ to launch the Rails API backend. 
*  Token requests to the Twitch API require a unique key that is referenced in a local .ENV file. This can be provided upon request.

Author:  Martin Crabtree







