import { exec } from 'node:child_process';

export default function tailwindWatch() {
    // Define the input and output file paths
    const inputCssFile = './11ty/css/_tailwind-input.css';
    const outputCssFile = './11ty/css/tailwind.css';

    // Command to watch and rebuild Tailwind CSS
    const watchCommand = `npx @tailwindcss/cli@next -i ${inputCssFile} -o ${outputCssFile} --watch`;

    // Execute the watch command
    exec(watchCommand, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error: ${err.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stdout: ${stdout}`);
    });
}