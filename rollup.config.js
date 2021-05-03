
// @see https://github.com/PolymerLabs/lit-element-starter-ts/blob/master/rollup.config.js

import { terser}  from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'my-element.js',
  output: {
    file: 'my-element.bundled.js',
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    resolve(),
    terser({
      ecma: 2020,
      module: true,
    })
  ],
};
