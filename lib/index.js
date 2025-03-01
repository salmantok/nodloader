import fs from 'fs';
import { pipeline } from 'stream/promises';

export async function nodloader(url, outputPath) {
  console.log(`Downloading from: ${url}`);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to download: ${response.status} ${response.statusText}`
      );
    }

    const fileStream = fs.createWriteStream(outputPath);
    await pipeline(response.body, fileStream);

    console.log(`✅ Download complete: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}
