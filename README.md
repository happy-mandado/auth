# Happy Mandado Auth
Handles happy mandado webapp authentication

## Setup

### Requirements
Install nodejs:
```bash
$ brew install nodeenv

# Node Version X.Y
$ nodeenv /path/to/your/envs/node
$ source /path/to/your/envs/node/bin/activate
$ cd /path/to/waitress/repo/path

$ npm install
```

Auth0 tenant:
```
Domain
Client ID
Client Secret
Scope
```

### Config files
Each env must require its own:
 - Domain
 - API Origin
 - API Port
 - Auth callback
 - Auth redirect
 - Cookie name
 - Cookie secret
 - Cookie domain


## Test
```bash
$ npm test-unit
$ npm --silent run test-path path/to/file
```

## Run
Development
```bash
$ npm start-dev
```

Production
```bash
$ npm start
```
