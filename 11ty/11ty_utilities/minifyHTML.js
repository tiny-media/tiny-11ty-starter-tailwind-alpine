import { minify } from 'html-minifier-terser';
import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { globSync } from 'glob';
import path from 'node:path';

async function minifyHTML() {
    // Find all HTML files in the output directory
    const htmlFiles = globSync('./_site/**/*.html');
    
    // Minification options for HTML
    const minifyOptions = {
        collapseWhitespace: true,
        removeComments: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
        decodeEntities: true
    };

    // Minify each HTML file
    for (const file of htmlFiles) {
        try {
            const fileContent = readFileSync(file, 'utf8'); // Read file content
            const minifiedContent = await minify(fileContent, minifyOptions); // Minify content
            mkdirSync(path.dirname(file), { recursive: true }); // Ensure directory exists
            writeFileSync(file, minifiedContent); // Write minified content back to file
        } catch (err) {
            console.error(`Error minifying file: ${file}`, err); // Handle errors
        }
    }

    console.log('HTML minification complete.');
}

export default minifyHTML;