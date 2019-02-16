# express-example-2019

## Quick Start

Get started developing...

```shell
# install deps
yarn install

# run in development mode
yarn dev

# run tests
yarn test
```

---

## Install Dependencies

Install all package dependencies (one time operation)

```shell
yarn install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
yarn dev
```

or debug it

```shell
yarn dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
yarn compile
yarn start
```

## Test It

Run the Mocha unit tests

```shell
yarn test
```

or debug them

```shell
yarn test:debug
```

## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/examples` endpoint 
  ```shell
  curl http://localhost:3000/api/v1/examples
  ```


## Debug It

#### Debug the server:

```
yarn dev:debug
```

#### Debug Tests

```
yarn test:debug
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file