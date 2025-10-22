// Run `node scripts/createIndex.js`

import { readdir, writeFile } from 'node:fs/promises';
import { extname, basename } from 'path';

const dir = './src/lib';

const files = await readdir(dir);

const arr = files
	.toSorted()
	.map((file) => {
		if (extname(file) !== '.svelte') return '';

		return basename(file, '.svelte');
	})
	.filter(Boolean);

const imports = arr.map((name) => `import ${name} from './${name}.svelte';`).join('\n');

const exports = `
export {
  ${arr.join(', \n  ')}
};
`;

const text = '// This file was auto-generated\n\n' + imports + '\n' + exports;

try {
	await writeFile('./src/lib/index.ts', text);
} catch (err) {
	console.error(err);
}
