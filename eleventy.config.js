import minifyJS from "./11ty/11ty_utilities/minifyJS.js";
import watchJS from "./11ty/11ty_utilities/watchJS.js";
import minifyCSS from "./11ty/11ty_utilities/minifyCSS.js";
import minifyHTML from "./11ty/11ty_utilities/minifyHTML.js";
import tailwindWatch from "./11ty/11ty_utilities/tailwindWatch.js";
import tailwindBuild from "./11ty/11ty_utilities/tailwindBuild.js";

export default async function (eleventyConfig) {
	// Determine if the current environment is production or development
	const isProduction = process.env.ELEVENTY_RUN_MODE === "build";
	const isDevelopment = process.env.ELEVENTY_RUN_MODE === "serve";

	// Set passthrough copy behavior. "copy" or "passthrough"
	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	//
	eleventyConfig.setServerOptions({
		// watch: ["_site/css/tailwind.css"],
	});
	// Always passthrough rootFolder to the root of the output directory
	eleventyConfig.addPassthroughCopy({ "11ty/rootFolder": "/" });

	// Add plugins for minification and bundling based on the environment
	if (isProduction) {
		// In production, minify CSS and HTML, and minify & bundle JS/TS
		eleventyConfig.addPlugin(minifyCSS);
		eleventyConfig.addPlugin(minifyJS);
		eleventyConfig.addPlugin(tailwindBuild);
		eleventyConfig.on("afterBuild", async () => {
			await minifyHTML();
		});
	}
	if (isDevelopment) {
		// Build and watch tailwindcss
		eleventyConfig.addPlugin(tailwindWatch);
		// In development, watch and bundle JS/TS
		eleventyConfig.addPlugin(watchJS);
		// copy all the css files from 11ty/css to /css in the output directory
		eleventyConfig.addPassthroughCopy({ "11ty/css": "/css" });
	}

	return {
		dir: {
			input: "Content", // Source files directory
			output: "_site", // Output directory
			includes: "../11ty/11ty_includes", // Includes directory (relative to input)
			layouts: "../11ty/11ty_layouts", // Layouts directory (relative to input)
			data: "../11ty/11ty_data", // Data directory (relative to input)
		},
		templateFormats: ["html", "liquid", "md"], // Supported template formats
	};
}
