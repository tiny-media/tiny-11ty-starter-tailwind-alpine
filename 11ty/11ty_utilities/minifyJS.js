    import { build } from 'esbuild';
    import { globSync } from 'glob';
    import { mkdirSync } from 'node:fs';
    import path from 'node:path';

    function minifyJS() {
        const inputDir = './11ty/js';
        const outputDir = '_site/js';

        // Find all JS and TS files, excluding those starting with an underscore
        const files = globSync(`${inputDir}/**/*.{js,ts}`, {
            ignore: '**/_*',
        });

        // Ensure the output directory exists
        mkdirSync(outputDir, { recursive: true });

        for (const file of files) {
            const ext = path.extname(file);
            const fileName = `${path.basename(file, ext)}.js`;
            const outputFile = path.join(outputDir, fileName);
        
            // Build, bundle, and minify the JS/TS file
            build({
                entryPoints: [file],
                outfile: outputFile,
                minify: true,
                bundle: true,
                sourcemap: false, // No sourcemaps for production
                target: 'es2020',
                platform: 'browser',
            }).catch(() => process.exit(1)); // Exit process on failure
        }
    }

    export default minifyJS;