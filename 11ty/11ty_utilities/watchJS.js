import { build, context } from 'esbuild';
import { globSync } from 'glob';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import chokidar from 'chokidar';

async function watchJS() {
    const inputDir = './11ty/js';
    const outputDir = '_site/js';

    // Find all JS and TS files, excluding those starting with an underscore
    const files = globSync(`${inputDir}/**/*.{js,ts}`, {
        ignore: '**/_*',
    });

    // Object to store entry points and their output paths
    const entryPoints = {};

    // Ensure the output directory exists
    mkdirSync(outputDir, { recursive: true });

    for (const file of files) {
        const ext = path.extname(file);
        const fileName = `${path.basename(file, ext)}.js`;
        const outputFile = path.join(outputDir, fileName);

        entryPoints[file] = outputFile;

        // Create a watch context for each file
        const ctx = await context({
            entryPoints: [file],
            outfile: outputFile,
            minify: false, // Do not minify for development
            bundle: true,
            sourcemap: true,
            target: 'es2020', // Target modern JavaScript
            platform: 'browser',
        });
        await ctx.watch(); // Start watching for changes
    }

    // Watch for changes in the input directory
    const watcher = chokidar.watch(`${inputDir}/**/*.{js,ts}`);

    watcher.on('change', (file) => {
        // Rebuild relevant entry points for the changed file
        for (const entryFile of files) {
            const entryExt = path.extname(entryFile);
            const entryFileName = `${path.basename(entryFile, entryExt)}.js`;
            const entryOutputFile = path.join(outputDir, entryFileName);

            build({
                entryPoints: [entryFile],
                outfile: entryOutputFile,
                minify: false, // Do not minify for development
                bundle: true,
                sourcemap: true,
                target: 'es2020', // Target modern JavaScript
                platform: 'browser',
            }).catch(() => process.exit(1)); // Exit process on failure
        }
    });
}

export default watchJS;