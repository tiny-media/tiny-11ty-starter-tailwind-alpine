import { exec } from 'node:child_process';

export default function tailwindBuild() {
    return new Promise((resolve, reject) => {
        // Define the input and output file paths
        const inputCssFile = './11ty/css/_tailwind-input.css';
        const outputCssFile = './_site/css/tailwind.css';

        // Command to build Tailwind CSS
        const buildCommand = `npx @tailwindcss/cli@next -i ${inputCssFile} -o ${outputCssFile} --minify`;

        // Execute the build command
        exec(buildCommand, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error: ${err.message}`);
                reject(err);
                return;
            }

            if (stderr?.trim()) {
                console.warn(`Stderr: ${stderr}`);
            }

            if (stdout?.trim()) {
                console.log(`Stdout: ${stdout}`);
            }

            resolve();
        });
    });
}