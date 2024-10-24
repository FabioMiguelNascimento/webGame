import gulp from "gulp";
import svgstore from "gulp-svgstore";
import cheerio from "gulp-cheerio";
import rename from "gulp-rename";

gulp.task("svgstore", function () {
return gulp
    .src("assets/icons/*.svg")
    .pipe(
        cheerio({
            run: function ($) {
                $("[fill]").removeAttr("fill");
                $("[stroke]").removeAttr("stroke");
            },
            parserOptions: { xmlMode: true },
        })
    )
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("./"));
});

gulp.task("watch", function () {
  gulp.watch("assets/icons/*.svg", gulp.series("svgstore"));
});