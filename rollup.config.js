import dts from 'rollup-plugin-dts';

export default {
    input: './index.ts',
    output: {
        file: './index.d.ts',
        format: 'es'
    },
    external: [/@angular\/.*/],
    plugins: [
        dts()
    ]
};