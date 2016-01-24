# webpack-config-babel

Setup everything you need to use [babel] with [webpack].

![build status](http://img.shields.io/travis/webpack-config/webpack-config-babel/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/webpack-config/webpack-config-babel/master.svg?style=flat)
![license](http://img.shields.io/npm/l/webpack-config-babel.svg?style=flat)
![version](http://img.shields.io/npm/v/webpack-config-babel.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/webpack-config-babel.svg?style=flat)

## Usage

Install:

```sh
npm install --save webpack-config-babel
```

Add to your `webpack.config.babel.js`:

```javascript
import babel from `webpack-config-babel`;

babel({ /* babel options */ })({
  /* existing webpack configuration */
})
```

[webpack]: https://webpack.github.io
[babel]: http://babeljs.io
