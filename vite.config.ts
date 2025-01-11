// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// This tells Vite to use the `process` polyfill when the process is used
			process: path.resolve("node_modules/process/browser"),
		},
	},
	define: {
		// Define global variables for process.env
		"process.env": process.env,
	},
});
