"use strict";

const gulp = require("gulp");
const fs = require("fs");
const rename = require("gulp-rename");
const fileinclude = require("gulp-file-include");

gulp.task("translate", function() {
  const translations = JSON.parse(fs.readFileSync("./translations.json"));
  for (let i = 0; i < translations.length; i++) {
    let lang = "";
    if (translations[i].version !== "en") {
      lang = `-${translations[i].version}`;
    }

    let context = translations[i];

    gulp
      .src("*.html")
      .pipe(
        fileinclude({
          context
        })
      )
      .pipe(rename({ suffix: lang }))
      .pipe(gulp.dest("dev"));
  }
});

gulp.task("default", ["translate"]);
