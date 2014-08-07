module.exports = (grunt) ->
  'use strict'

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    connect:
      app:
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

    csslint:
      dist:
        options:
          csslintrc: '.csslintrc'
        src: ['stylesheets/**/*.css', '!stylesheets/libs/**/*.css']

    csso:
      dynamic_mappings: 
        expand: true
        cwd: 'stylesheets/'
        src: ['**/*.css', '!**/*.min.css']
        dest: 'stylesheets/'
        ext: '.min.css'

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

  grunt.loadNpmTasks 'grunt-csso'
  grunt.loadNpmTasks 'grunt-image'
  grunt.loadNpmTasks 'grunt-csscomb'
  grunt.loadNpmTasks 'grunt-webfont'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-csslint'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  grunt.registerTask 'default', ['develop']
  grunt.registerTask 'stylesheet', ['compass', 'csscomb', 'csslint']
  grunt.registerTask 'develop', ['connect:app', 'watch']
  grunt.registerTask 'typeset', ['webfont', 'stylesheet']
  grunt.registerTask 'publish', ['stylesheet', 'watch', 'coffee']
  grunt.registerTask 'build', ['stylesheet', 'csso', 'image', 'coffee']
