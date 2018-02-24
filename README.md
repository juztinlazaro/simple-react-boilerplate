# [Test ui UI kit v1 BETA](https://www.npmjs.com/package/test_ui)

```
npm install test_ui --save
```

The UI Kit that powers Test ui's internal projects built on ReactJS, Sass and Antdesign.

### [Visit the documentation](https://affectionate-feynman-63065d.netlify.com/)

### Standards and Guidelines
https://github.com/Test ui/Test ui_ReactStarterKit/wiki/Css-Style-Guide

# Usage

We are using sass, simply import the `scss` file.

```
// compiled
@import "..path/node_modules/test_ui/css/main.scss"

//variables
@import "..path/test_ui/css/utils/variables"

//helpers
@import "..path/test_ui/css/utils/helpers"
```

or  css

```
import "test_ui/css/main.css"
```
# Development

To run develop ui kit

```
 npm start / yarn start
```

To run docx

```
npm run build
npm run docx
```

To build script:

```
 npm run build // for deployment in prod
 npm run build:style // build css
 npm run build:lib  // build lib
```

Special thanks to our inspirations:

* [Ant design](https://ant.design/)
* [Rico Sta. Cruz](http://rscss.io/)
* [maintainablecss](https://maintainablecss.com/chapters/)

**_test_ui_** should never be used outside of officially endorsed Test ui products or without explicit permission.
