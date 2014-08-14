module.exports = function(grunt) {
  'use strict';

  // load npm tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    dalek: {
      options: {
        browser: ['firefox']
      },
      src: ['dalek-test.js']
    },
  });

  grunt.registerTask('default', ['dalek']);
};

