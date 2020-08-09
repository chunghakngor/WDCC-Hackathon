# Incomplete Project from WDCC Hackathon
# WDCC MERN Workshop. 
A boilerplate for workshops and tutorials for MERN - Mongo, Express, React, Node/Next

# The WWDC MERN template

This template provides an initial application with the following features
* Home, About and Report pages
* User sign in and registration via Auth0 
* Pages or components that show depending on signed in state.
* Profile component to show data from sign in
* Button to log an event
* Server API to post a new event and return list of events
* Event is a simple object with name, type and date
* MongoDB middleware hook.
* NextJS implicit routing
* Demonstrate React client side data fetching - useEffect
* Demonstrate use of Next server side rendering
* Demonstrate Next SWR data fetching
* Styling using TailwindsCSS
* Jest Unit testing

## The App.
On the home page you first have to log in.  

Once signed in via Auth0 you then see a profile panel with your name and avatar and a button.
When you click the button we log an event in the db - name, date and event type. Everyone who clicks the button logs events into the same collection.

On the report page we fetch and list all the recorded events. This is displayed as a dumb table. 

## Brief
Create a full stack web application that 
* uses React for client side pages and components
* gets and posts data to the server API 
* handle API requests and store data in the database.

More information 
* [Task list](docs/Tasks.md)
* [Auth0 setup](docs/Auth0Setup.md)
* [Database setup](docs/database.md)
* [Vercel setup](docs/Vercel.md)
* [TailwindsCSS styling](https://tailwindcss.com/)
* [Jest Testing](https://jestjs.io/en/)

### Local development
* Create and checkout a new repository based on this template.
* copy .env-template to .env and fill in secrets 
* setup local or remote MongoDB
* `npm install`  to install the packages
* `npm run dev` to start the dev server
* `npm run build` to build the deployment package
* `npm start` to run the production server.

### Test 
* place *.spec.js files in `__tests__` folders close to tested items
* `npm test` to run the test suite
* `npm run test:coverage` to get coverage

