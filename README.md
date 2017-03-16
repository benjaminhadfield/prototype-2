# prototype-2
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

COMP204P Team 35. UCL Peach.

## Installation

```sh
$ cd /path/to/dir
$ npm clone https://github.com/benjaminhadfield/prototype-2.git
$ npm install
```

### Database

You need to run a mysql database locally. Create a database named 'peach'. Set your database user name and password in "server/api/database.js". Then simply visit [http://localhost:3000/api/init](http://localhost:3000/api/init) and the app will create the required tables. A Postman files containing all API calls is available in "Postman/Peach.postman_collection.json".

## Development

Start the development server by running `gulp dev`.


[npm-image]: https://badge.fury.io/js/prototype-2.svg
[npm-url]: https://npmjs.org/package/prototype-2
[travis-image]: https://travis-ci.org/comp204p-team35/prototype-2.svg?branch=master
[travis-url]: https://travis-ci.org/comp204p-team35/prototype-2
[daviddm-image]: https://david-dm.org/comp204p-team35/prototype-2.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/comp204p-team35/prototype-2
