import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import packageJson from './package.json' assert { type: 'json' }
import postcss from 'rollup-plugin-postcss-modules'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
      },
      {
        file: packageJson.module,
        format: 'esm',
      },
    ],
    plugins: [
      commonjs(),
      postcss(),
      resolve(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'build/esm/types/index.d.ts',
    output: [{ file: 'build/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    // external: [/\.(css|scss)$/],
  },
]
