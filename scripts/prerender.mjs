import { readFile, writeFile } from 'node:fs/promises';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import App from '../.prerender/App.js';

// Ship the portfolio's content in the initial HTML for search engines and fast first paint.
const template = await readFile('dist/index.html', 'utf8');
const rendered = renderToString(createElement(App));
if (!template.includes('<div id="root"></div>')) throw new Error('Root placeholder missing during prerender.');
await writeFile('dist/index.html', template.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`));
console.log('Prerendered portfolio content into dist/index.html');
