import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sassDts from 'vite-plugin-sass-dts'
import ViteEnv from 'vite-plugin-env'
// https://vitejs.dev/config/
export default defineConfig({
    // assetsInclude: ['**/*.woff', '**/*.woff2'],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/stylesheets" as common;`,
                importer(...args) {
                    if (args[0] !== '@/stylesheets') {
                        return
                    }

                    return {
                        file: `${path.resolve(
                            __dirname,
                            './src/assets/stylesheets'
                        )}`,
                    }
                },
            },
        },
    },
    plugins: [
        react(),

        // sassDts({
        //   allGenerate: false,
        //   global: {
        //     generate: false,
        //     outFile: path.resolve(__dirname, "./style.d.ts"),
        //   },
        // }),
    ],
    resolve: {
        alias: {
            '@views': path.resolve(__dirname, 'src/views'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@enums': path.resolve(__dirname, 'src/enums'),
            '@interfaces': path.resolve(__dirname, 'src/interfaces'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@helpers': path.resolve(__dirname, 'src/helpers'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@redux-slices': path.resolve(__dirname, 'src/redux-slices'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@common': path.resolve(
                __dirname,
                'src/assets/stylesheets/_index.scss'
            ),
            '@locales': path.resolve(__dirname, 'src/locales'),
        },
    },
    // define: {
    //     // Some libraries use the global object, even though it doesn't exist in the browser.
    //     // Alternatively, we could add `<script>window.global = window;</script>` to index.html.
    //     // https://github.com/vitejs/vite/discussions/5912
    //     global: {},
    // },
})
