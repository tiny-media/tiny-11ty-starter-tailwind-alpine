import fs from "node:fs/promises";
import path from "node:path";

// Directory where the downloaded files will be saved
const DIRECTORY = "11ty/js/alpinejs/";

// List of AlpineJS modules with their URLs and target file names
const modules = [
  { name: "alpinejs", fileName: "_alpinejs_core.js" },
  { name: "@alpinejs/mask", fileName: "_alpinejs_mask.js" },
  { name: "@alpinejs/anchor", fileName: "_alpinejs_anchor.js" },
  { name: "@alpinejs/collapse", fileName: "_alpinejs_collapse.js" },
  { name: "@alpinejs/focus", fileName: "_alpinejs_focus.js" },
  { name: "@alpinejs/intersect", fileName: "_alpinejs_intersect.js" },
  { name: "@alpinejs/morph", fileName: "_alpinejs_morph.js" },
  { name: "@alpinejs/persist", fileName: "_alpinejs_persist.js" },
  { name: "@alpinejs/sort", fileName: "_alpinejs_sort.js" },
  { name: "@alpinejs/ui", fileName: "_alpinejs_ui.js" },
];

const directory = path.join(process.cwd(), DIRECTORY);

// Fetch the latest version of the given module from the npm registry
const fetchLatestVersion = async (moduleName) => {
  const url = `https://registry.npmjs.org/${encodeURIComponent(moduleName)}/latest`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch latest version for ${moduleName}`);
  }

  const data = await response.json();
  return data.version;
};

// Download the module's JavaScript file from the CDN and save it to the specified directory
const downloadModule = async (moduleName, version, fileName) => {
  const url = `https://cdn.jsdelivr.net/npm/${moduleName}@${version}/dist/cdn.min.js`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}`);
    }

    const text = await response.text();
    const fileContent = `// Version: ${version}\n${text}`;
    const filePath = path.resolve(directory, fileName);
    await fs.writeFile(filePath, fileContent);
    console.log(`Downloaded and saved to ${filePath}`);
  } catch (error) {
    console.error(`Failed to download ${url}. Error: ${error.message}`);
  }
};

// Main function to download all modules
const downloadAllModules = async () => {
  // Ensure target directory exists, create if it doesn't
  try {
    await fs.mkdir(directory, { recursive: true });
  } catch (error) {
    console.error(
      `Failed to create directory ${directory}. Error: ${error.message}`,
    );
    return;
  }

  // Loop through each module, fetch its latest version, and download the file
  for (const module of modules) {
    try {
      const version = await fetchLatestVersion(module.name);
      await downloadModule(module.name, version, module.fileName);
    } catch (error) {
      console.error(
        `Failed to process ${module.name}. Error: ${error.message}`,
      );
    }
  }
};

// Execute the main function to start the download process
downloadAllModules();
