# Getting Started with backlog (front end)

## Available Scripts

In the project directory, you can run:
### `npm run start-dev`
This will run the app on port 3001. The backend portion of this app is designed to run on port 3000, so this script was made to prevent that conflict.

If you're just running this without the use of the backend, feel free to use the standard start script:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `Configuration`
Create a file called `.env` in the project root, and add the following value: `REACT_APP_LOCATION=<insert backend url here>`

In addition, if redirects in AWS do not work, ensure that the Single Page Application redirect rule exists for the app: https://docs.aws.amazon.com/amplify/latest/userguide/redirects.html#redirects-for-single-page-web-apps-spa 