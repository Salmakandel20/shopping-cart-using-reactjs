const gulp= require("gulp")
const gpsass=require("gulp-sass")
const sass=gpsass(require("sass"))

gulp.task("sass",async function(){
    gulp.src("src/componets/**/*.scss").pipe(sass()).pipe(gulp.dest("src/css"))
})