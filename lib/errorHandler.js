'use strict';

function errorHandler(error) {
  console.log(error);
  throw new Error('Server operation failed');
}
module.exports = errorHandler;
