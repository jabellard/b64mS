var gulp = require("gulp");
var mocha = require("gulp-mocha");

gulp.task("test", [], function(done){
  gulp.src("./test/*.js", {
    read: false
  })
    .pipe(mocha({
      exit: true
    }));
  done();
});

gulp.task("default", ["test"]);
