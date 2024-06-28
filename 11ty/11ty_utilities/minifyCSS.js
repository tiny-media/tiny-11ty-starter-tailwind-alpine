import { bundle, bundleAsync } from 'lightningcss';
import { writeFileSync, mkdirSync } from 'node:fs';
import { globSync } from 'glob';
import path from 'node:path';

async function minifyCSS() {
    // Find all CSS files, excluding those starting with an underscore
    const files = globSync('./11ty/css/**/*.css', {
        ignore: ['./11ty/css/**/_*.css']
    });

    const outputDir = './_site/css';
    mkdirSync(outputDir, { recursive: true });  // Create output directory if it doesn't exist

    for (const file of files) {
        try {
            const dependencies = [];
            const { code } = await bundleAsync({
                filename: file,
                minify: true,
                sourceMap: false,
                targets: { future: (1) },  // Enables draft syntaxes
                drafts: {
                    customMedia: true,
                    nesting: true,
                },
                resolver: {
                    resolve(specifier, from) {
                        const importPath = path.resolve(path.dirname(from), specifier);
                        dependencies.push(importPath);
                        return importPath;
                    }
                }
            });

            const relativePath = path.relative('./11ty/css', file);
            const outputFilePath = path.join(outputDir, relativePath);  // Determine the output file path
            mkdirSync(path.dirname(outputFilePath), { recursive: true });  // Create directory for the output file if necessary

            writeFileSync(outputFilePath, code);  // Write the minified code to the output file
        } catch (error) {
            console.error(`Failed to process ${file}:`, error);
        }
    }
}

export default minifyCSS;