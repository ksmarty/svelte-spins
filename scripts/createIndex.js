// Run `node scripts/createIndex.js`

const fs = require("fs");
var path = require("path");

// directory path
const dir = "./src";

let importsArr = [];
let exportsArr = [];

fs.readdir(dir, (err, files) => {
	files.forEach((file) => {
		if (path.extname(file) === ".svelte") {
			importsArr.push(path.basename(file, ".svelte"));
			exportsArr.push(path.basename(file, ".svelte"));
		}
	});

	// Imports
	let imports = importsArr.reduce(
		(acc, val) => acc + `import ${val} from "./${val}.svelte"; \n`,
		""
	);

	// Exports
	let exports =
		exportsArr
			.reduce((acc, val) => acc + val + ", ", "export { ")
			.slice(0, -2) + " };";

	let text = "// This file was auto-generated\n" + imports + exports;

	try {
		fs.writeFileSync("./src/index.ts", text);
	} catch (err) {
		console.error(err);
	}
});
