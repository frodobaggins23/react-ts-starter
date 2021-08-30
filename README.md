# react-ts-starter
Simple starter kit (React/Webpack/Typescript/Eslint)

1. clone repository
2. `nvm use`
3. `npm install`
4. `npm run dev`

you can deploy to Heroku:
- do not specify PORT (it assigned dynamically)
- make sure gitignore does not include public files (index.html)
- install heroku cli on your machine
- heroku uses `npm start` script by default
- `npm heroku-postbuild` will be used to trigger postbuild actions (e.g. webpack compilation)
- `heroku logs --tail` will allow you to see the running process logs (and errors)
- `heroku local web` will allow you to run heroku instance locally

enjoy