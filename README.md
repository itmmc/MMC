<h1 style="text-align: center">Modern Mills ⚡</h1>
 A vite react typescript boilerplate with pre-configured <code>sass</code>, <code>redux-tool-kit</code>, <code>tailwind</code>, <code>esLint</code> <code>Prettier</code>, <code>i18n internationalization</code> &amp; <code>Dockerfile</code>... built in cli coming soon ⚒️
 
  .
 This to get you ready with react vite develpment with zero configurations
  
<br>
<br>

![Builds Workflows](https://github.com/patrickniyogitare28/super-vite/actions/workflows/superlinter.yml/badge.svg)

## Documentation

Click to access [The super vite documentation](https://doc-super-vite.vercel.app/)

## Live demo

Click to view [The super vite live demo](https://super-vite.vercel.app/)

## Getting started

Click `Use this template` to create the your own repo from the template

Before you can start developing your awesome application you need to install the project's dependencies. Make sure you have Node (>= 10.13.0)

### Development

Once all dependencies have been installed you can start development. To start a development server on [http://localhost:3000](http://localhost:3000) run:

```sh
$ npm run dev
```

or

```sh
$ yarn dev
```

### Production

To run your application in production make sure to run a build first:

```sh
$ npm run build
```

or

```sh
$ yarn build
```

And then start you application with a provided port number (defaults to 3000 if not provided):

```sh
$ PORT=8080 npm run start
```

This will render static HTML pages into `./out`

### Linters

The boilerplate provides a couple of linters to help you keep an eye on code consistency and type safety. There are three linters: one for CSS, one for TypeScript and one for type safety. You can use each of them separately using the following commands:

```sh
$ npm run lint:css
$ npm run lint:ts
$ npm run lint:types
```

TIP: To get the most out of your linters install the corresponding (Stylelint, TSLint) plugins for your editor or IDE

**Prettier**

Prettier helps you to enforce consistent (opinionated) code style. If possible, you can tell your editor to format you code when you save a file. If you are not able to do this, you can run prettier manually using:

```sh
$ npm run prettier
```

### Tests

You can write your tests using Jest and Enzyme. You can run all test with the following command

```sh
$ npm run test
```

> To write your unite tests, add a test file under `src/__tests__`