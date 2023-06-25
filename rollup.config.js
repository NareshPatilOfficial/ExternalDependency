// import babel from '@rollup/plugin-babel';
const babel = require('@rollup/plugin-babel');
// import external from 'rollup-plugin-peer-deps-external';
const external = require('rollup-plugin-peer-deps-external');
// import del from 'rollup-plugin-delete';
const del = require('rollup-plugin-delete');
// import pkg from './package.json';
const pkg = require('./package.json');

module.exports = {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        external(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled' 
        }),
        del({ targets: ['dist/*'] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};