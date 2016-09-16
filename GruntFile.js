module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['Gruntfile.js', 'src/**/*.js']
    },

    uglify: {
      build: {
        files: {
          'dist/js/main.min.js': 'src/**/*.js'
        }
      }
    },

    less: {
      options: {
        cleancss: true
      },
      dev: {
        files: {
          "dist/css/main.css": "src/css/main.less",
          "dist/css/spectre.css": "src/css/spectre.less"
        }
      },
      prod: {
        options: {
          compress: true
        },
        files: {
          "dist/css/main.css": "src/css/main.less",
          "dist/css/spectre.css": "src/css/spectre.less"
        }
      }
    },

    imagemin: {
      build: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["**/*.{png,jpg,gif}"],
          dest: "dist/"
        }]
      }
    },

    watch: {
      stylesheets: {
        files: 'src/**/*.less',
        tasks: ['less']
      },
      scripts: {
        files: 'src/**/*.js',
        tasks: ['jshint', 'uglify']
      },
      images: {
        files: ["src/**/*.{png,jpg,gif}"],
        tasks: ['imagemin']
      }
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ['*.html'],
          dest: 'dist/'
        }]
      },
      audio: {
        files: [{
          expand: true,
          cwd: "src/audio",
          src: ['*.{mp3,ogg}'],
          dest: 'dist/audio'
        }]
      },
      vendor: {
        files: [{
          expand: true,
          cwd: 'node_modules/jquery/dist',
          src: 'jquery.min.js',
          dest: 'dist/js'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['jshint', 'uglify', 'less:prod', 'imagemin', 'copy']);
};
