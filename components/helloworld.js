'use strict';
module.exports = {
  helloworld: (argpass, fn) => {
    const outgoingvariable = 'hello world';
    fn(outgoingvariable);
  }
};
