#!/usr/bin/env node
import path from 'path';
import { nodloader } from './index.js';

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('❌ Usage: nodloader <url> <filename>');
    process.exit(1);
  }

  const [url, filename] = args;
  const outputPath = path.resolve(process.cwd(), filename);

  nodloader(url, outputPath);
}
