import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import dts from "rollup-plugin-dts";
import packageJson from './package.json' assert { type: 'json' };

export default [
    {
        input: 'src/index.tsx',
        output: [
            {
                file: packageJson.main,
                format: 'esm',
            },
        ],
        plugins: [
            external(),
            resolve(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser()
        ],
    },
    {
        input: 'src/index.tsx',
        output: [{ file: packageJson.types, format: "esm" }],
        plugins: [dts()],
    },
];
