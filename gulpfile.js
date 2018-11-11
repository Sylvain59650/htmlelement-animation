const babel = require("gulp-babel");
const gulp = require("gulp");
const concat = require("gulp-concat");
const watch = require("gulp-watch");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var fs = require("fs");
var gutil = require("gulp-util");
var postcss = require("gulp-postcss");
var rename = require("gulp-rename");

var pkg = JSON.parse(fs.readFileSync("package.json"));
var activatedAnimations = activateAnimations();

var chemins = {
  dist: "./dist/",
  demo: "./docs/demo/modules/htmlelement-animation/dist/"
}

var opts = {
  destPath: "./dist/",
  destAnimation: "./dist/css/",

  autoprefixer: {
    browsers: ["> 1%", "last 2 versions", "Firefox ESR"],
    cascade: false
  },

  minRename: {
    suffix: ".min"
  }
}


function activateAnimations() {
  var categories = JSON.parse(fs.readFileSync("htmlelement-animation-config.json")),
    category,
    files,
    file,
    target = [],
    count = 0;

  for (category in categories) {
    if (categories.hasOwnProperty(category)) {
      files = categories[category];

      for (file in files) {
        if (files[file]) {
          // marked as true
          target.push("src/animations/" + category + "/" + file + ".css");
          count += 1;
        }
      }
    }
  }
  // prepend base CSS
  target.push("src/animations/core.css");

  if (!count) {
    gutil.log("No animations activated.");
  } else {
    gutil.log(count + (count > 1 ? " animations" : " animation") + " activated.");
  }

  return target;
}



gulp.task("css", function() {
  return gulp
    .src(activatedAnimations)
    .pipe(concat("htmlelement-animation.min.css"))
    .pipe(postcss([autoprefixer(opts.autoprefixer)]))
    .pipe(postcss([cssnano({ reduceIdents: { keyframes: false } })]))
    .pipe(gulp.dest(chemins.demo + "css/"))
    .pipe(gulp.dest(opts.destAnimation));
});


gulp.task("css:parts", function() {
  return gulp
    .src(activatedAnimations)
    .pipe(postcss([autoprefixer(opts.autoprefixer)]))
    .pipe(postcss([cssnano({ reduceIdents: { keyframes: false } })]))
    .pipe(rename(opts.minRename))
    .pipe(gulp.dest(chemins.demo + "css/"))
    .pipe(gulp.dest(opts.destAnimation));
});


gulp.task("htmlelement-animation.min.js", function() {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("htmlelement-animation.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: false,
      minified: false
    }))
    .pipe(gulp.dest(chemins.demo))
    .pipe(babel({
      presets: ["es2015"],
      compact: false,
      minified: false
    }))
    .pipe(gulp.dest(chemins.dist))
});


// gulp.task("watch:htmlelement-animation.min.js", function() {
//   watch("./src/**.js", function() {
//     gulp.run("htmlelement-animation.min.js");
//   });
// });


// gulp.task("watch", ["watch:htmlelement-animation.min.js"]);


//gulp.task("default", ["htmlelement-animation.min.js", "css", "css:parts"]);