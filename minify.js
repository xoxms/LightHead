// Import Terser so we can use it
const { minify } = require('terser');

// Import fs so we can read/write files
const fs = require('fs');

// Define the config for how Terser should minify the code
// This is set to how you currently have this web tool configured
const config = {
  compress: {
    dead_code: true,
    drop_console: false,
    drop_debugger: true,
    keep_classnames: true,
    keep_fargs: true,
    keep_fnames: true,
    keep_infinity: true
  },
  mangle: {
    eval: true,
    keep_classnames: true,
    keep_fnames: true,
    toplevel: true,
    safari10: true
  },
  module: false,
  sourceMap: false,
  output: {
    comments: 'some'
  }
};

// Load in your code to minify
const code = fs.readFileSync('lighthead.js', 'utf8');

// Minify the code with Terser
const minified = minify(code, config)
  .then(result => {
    // Write the minified code to a file
    fs.writeFileSync('lighthead.min.js', result.code);
  })
