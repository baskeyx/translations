# Farfetch Translations

Gulp Workflow to pull translations from JSON file and output these as separate HTML files.

## Install
You will need to have Node and Gulp installed to run this build.
```sh
npm install
```
## Run Build
To run the build:

```sh
gulp
```

(files are saved in the dev directory)

## About this build

This build uses the gulp=file-include package, to add a new translation attribute you must add this to the translations.json file. The key of this must then be included in the index.html file with the '@@' prefix. e.g: @@translation1.

You can enter as many new translations as you like, the build will automatically output a file for each entry with the suffix named after the version.
