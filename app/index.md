<p><a href="https://github.com/salmantok/nodloader.git" class="link">Nodloader</a> adalah alat ringan untuk mengunduh file dari<b> URL</b> menggunakan<a href="https://nodejs.org" class="link"> Node.js</a>. Bisa digunakan sebagai<b> CLI</b> atau<b> library</b> dalam kode.</p>

---

## 🔧 Instalasi & Penggunaan

### CLI (Command Line Interface)

Unduh file langsung dari terminal:

```bash
npx nodloader <url> <outputPath>
```

Atau instal secara global:

```bash
npm install -g nodloader
nodloader <url> <outputPath>
```

Contoh:

```bash
nodloader https://example.com/file.zip myfile.zip
nodloader https://example.com/image.png downloads/image.png
```

### Sebagai Library dalam Proyek

Instal dalam proyek:

```bash
npm install nodloader
```

Gunakan dalam kode:

ESM

```js
import { nodloader } from 'nodloader';

await nodloader('https://example.com/file.zip', './file.zip');
```

CommonJS

```js
const { nodloader } = require('nodloader');

nodloader('https://example.com/file.zip', './file.zip');
```

---

## 🛠 API

### `nodloader(url, outputPath): Promise<void>`

- `url` → URL file yang diunduh
- `outputPath` → Lokasi penyimpanan (relatif terhadap `process.cwd()`)

---

## ✨ Fitur Utama

✅ Mendukung **CLI** & **library**

✅ Menggunakan `fetch` bawaan **Node.js** 18+
