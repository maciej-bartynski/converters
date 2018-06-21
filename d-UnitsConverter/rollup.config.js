import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import sassImporter from 'node-sass-package-importer';
import scss from 'rollup-plugin-scss';

export default {
    entry: 'devSource/devScripts/interfaceEngine.js',
    dest: 'productionSource/interfaceEngine.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        scss({
            failOnError: false,
            importer: sassImporter(),
            insert: false,
            outputStyle: 'expanded',
            output: 'productionSource/productionStyle.css'
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        eslint({
            exclude: [
                'devSource/devStyles/**',
            ]
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        uglify(),

    ],
};