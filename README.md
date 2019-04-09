# Using webpack 4

## Intro

Following webpack's ["Getting Started"](https://webpack.js.org/guides/getting-started) tutorial gives a good introduction to what webpack does. In summary,

> At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

Since any but the most basic, one-file web page has dependencies, webpack is appropriate to use on almost any project.  Further, webpack includes some development tools that in conjunction with npm / yarn will make most projects easier.

## Basics

`package.json` contains two scripts, one for development and one for a production build.

```
"dev": "webpack-dev-server --mode=development --open",
"build": "export NODE_ENV=production && webpack --mode=production"
```

There is a single `webpack.config.js` that performs the appropriate bundling, based on the mode setting and the value of `NODE_ENV`.

## Miscellaneous

### jsHint config

I use `jsHint` (via Atom's `linter-jshint` package).  You can configure linter options is various ways using `jsHint`

1. Use the `.jshintrc` config file
2. specify the `jshintConfig` property in the project's `package.json`

    ```json
    {

      "jshintConfig": {
        "esversion": 6
      },

    }
    ```
3. using inline comments, e.g.

    ```
    /* jshint undef: true, unused: true */
    /* globals MY_GLOBAL */
    ```

Including `jshintConfig` in `package.json` is the method I prefer, as it is more self documenting.

#### sources

- https://webpack.js.org/guides/getting-started
- https://www.valentinog.com/blog/webpack-tutorial/
- https://github.com/webpack-contrib/mini-css-extract-plugin
- https://jshint.com/docs/
- [ejs templating](https://ejs.co/)
