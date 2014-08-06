module.exports = (grunt) ->
  'use strict'

  # Project configuration.
  grunt.initConfig
    # Metadata.
    pkg: grunt.file.readJSON 'package.json'

    # Start a static web server.
    # Reload assets live in the browser
    connect:
      options:
        port: 8080
        base: ''
        open: 'http://localhost:8080/'

    coffee:
      dist:
        expand: true
        cwd: 'src/coffeescripts/'
        src: ['**/*.coffee']
        dest: 'javascripts/'
        ext: '.js'

    # Sort CSS properties in specific order.
    csscomb:
      dist:
        options:
          config: '.csscombrc'
        dynamic_mappings:
          expand: true
          cwd: 'stylesheets/'
          src: ['**/*.css']
          dest: 'stylesheets/'
          ext: '.css'
    # Lint CSS files.
    csslint:
      dist:
        options:
          csslintrc: '.csslintrc'
        src: ['stylesheets/**/*.css', '!stylesheets/libs/**/*.css']

    # Minify CSS files with CSSO.
    csso:
      dynamic_mappings: 
        expand: true
        cwd: 'stylesheets/'
        src: ['**/*.css', '!**/*.min.css']
        dest: 'stylesheets/'
        ext: '.min.css'

    # Optimize PNG, JPEG, GIF images with grunt task.
    image:
      options:
        optimizationLevel: 3
      dist:
        files: [
          expand: true
          cwd: "images/"
          src: ["**/*.{png,jpg,gif}"]
          dest: "images/"
        ]

    compass:
      dist:
        options:
          config: 'compass_config.rb'

    # Run tasks whenever watched files change.
    watch:
      options:
        livereload: true
      css:
        files: ['src/sass/**/*.scss']
        tasks: ['stylesheet']
      html:
        files: ['*.html', 'demo/**/*.html']
      js:
        files:['src/coffeescripts/**/*.coffee']
        tasks: ['coffee']

    # SVG to webfont converter for Grunt.
    webfont:
      dist:
        src: 'src/svg/*.svg'
        dest: 'font/'
        destCss: 'src/sass/libs/'
        options:
          font: 'myfont'
          types: ['woff', 'ttf']
          stylesheet: 'scss'
          htmlDemo: false
          syntax: 'bootstrap'
          relativeFontPath: 'font/'

  # Load the plugins.
  grunt.loadNpmTasks 'grunt-csso'
  grunt.loadNpmTasks 'grunt-image'
  grunt.loadNpmTasks 'grunt-csscomb'
  grunt.loadNpmTasks 'grunt-webfont'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-csslint'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  # Tasks.
  grunt.registerTask 'default', ['develop']
  grunt.registerTask 'stylesheet', ['compass', 'csscomb', 'csslint']
  grunt.registerTask 'develop', ['connect', 'watch']
  grunt.registerTask 'typeset', ['webfont', 'stylesheet']
  grunt.registerTask 'publish', ['stylesheet', 'watch', 'coffee']
  grunt.registerTask 'build', ['stylesheet', 'csso', 'image', 'coffee']
