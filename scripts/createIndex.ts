// Run `node scripts/createIndex.js`

import { readdir, writeFileSync } from "fs";
import { extname, basename } from "path";

const dir = "./src";

const importsArr: string[] = [];
const exportsArr: string[] = [];

readdir(dir, (err, files) => {
  if (err) throw err;

  files.toSorted().forEach((file) => {
    if (extname(file) === ".svelte") {
      const name = basename(file, ".svelte");
      importsArr.push(name);
      exportsArr.push(name);
    }
  });

  const imports = importsArr
    .map((name) => `import ${name} from "./${name}.svelte";`)
    .join("\n");

  const exports = `export {
  ${exportsArr.join(", \n  ")}
};`.trim();

  const text = "// This file was auto-generated\n" + imports + "\n" + exports;

  try {
    writeFileSync("./src/index.ts", text);
  } catch (err) {
    console.error(err);
  }
});
