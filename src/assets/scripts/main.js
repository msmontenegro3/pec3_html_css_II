/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import axe from 'axe-core';

axe.run(document).then(results => {
  console.log(results.violations);
  
});

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();
