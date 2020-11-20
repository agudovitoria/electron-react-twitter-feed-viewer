# Twitter feed viewer

## Documentation
[General development documentation](./README_SOURCES.md)

Source JSDOC documentation is in folder `/docs`after execute `yarn docs`

## Release

You can download latest Mac OSX release (v1.0.2) [here](./dist/twitter-feed-viewer-1.0.0.dmg).

### Development
#### Required dependencies
* `yarn global add parcel-bundler` For generate documentation from code

#### Scripts

* `yarn start`
    * Runs the app in the development mode
    * Electron windows is opened automatically
    * Opens automatically _devtools_
    * Open [http://localhost:3000](http://localhost:3000) to view it in the browser
    * The page will reload when some changes
    * Show lint errors in the console

* `yarn test`
    * Launches the test runner in the interactive watch mode
    * press *w* key to see instructions
    
* `yarn test --coverage`
    * Launches the test runner in the interactive watch mode showing code coverage
    * press *w* key to see instructions

*  `yarn build`
    * Build electron application in standalone mode

#### Environment variables
Application uses _.env_ files for set environment variables:
* _.env_
* _.env.development_
* _.env.test_
* _.env.production_
> Remember that application is created with _CRA_, and envs should start with "REACT_APP_"
