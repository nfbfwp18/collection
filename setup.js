const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const zlib = require('zlib');

const nodeDir = path.dirname(process.execPath);

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const request = (u) => {
      https.get(u, res => {
        if (res.statusCode === 302 || res.statusCode === 301) {
          return request(res.headers.location);
        }
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }).on('error', reject);
    };
    request(url);
  });
}

async function extractTgz(tgzPath, destDir) {
  return new Promise((resolve, reject) => {
    const gunzip = zlib.createGunzip();
    const readStream = fs.createReadStream(tgzPath);
    const chunks = [];
    readStream.pipe(gunzip);
    gunzip.on('data', chunk => chunks.push(chunk));
    gunzip.on('end', () => {
      const tarData = Buffer.concat(chunks);
      // Parse tar
      let offset = 0;
      while (offset < tarData.length - 512) {
        const header = tarData.slice(offset, offset + 512);
        const name = header.slice(0, 100).toString('utf8').replace(/\0/g, '');
        if (!name) break;
        const sizeStr = header.slice(124, 136).toString('utf8').replace(/\0/g, '').trim();
        const size = parseInt(sizeStr, 8) || 0;
        const type = header[156];
        
        const relName = name.replace(/^package\//, '');
        const fullPath = path.join(destDir, relName);
        
        if (type === 53 || name.endsWith('/')) { // directory
          fs.mkdirSync(fullPath, { recursive: true });
        } else if (relName) {
          fs.mkdirSync(path.dirname(fullPath), { recursive: true });
          const content = tarData.slice(offset + 512, offset + 512 + size);
          fs.writeFileSync(fullPath, content);
        }
        offset += 512 + Math.ceil(size / 512) * 512;
      }
      resolve();
    });
    gunzip.on('error', reject);
  });
}

async function main() {
  const npmTgz = path.join(nodeDir, 'npm.tgz');
  const npmDir = path.join(nodeDir, 'node_modules', 'npm');
  
  if (!fs.existsSync(npmDir)) {
    console.log('Downloading npm...');
    await downloadFile('https://registry.npmjs.org/npm/-/npm-10.9.2.tgz', npmTgz);
    console.log('Extracting npm...');
    fs.mkdirSync(path.join(nodeDir, 'node_modules'), { recursive: true });
    await extractTgz(npmTgz, path.join(nodeDir, 'node_modules', 'npm'));
    console.log('npm extracted');
  }
  
  // Create npm.cmd
  const npmCmd = `@echo off\r\n"${process.execPath}" "${path.join(nodeDir, 'node_modules', 'npm', 'bin', 'npm-cli.js')}" %*\r\n`;
  fs.writeFileSync(path.join(nodeDir, 'npm.cmd'), npmCmd);
  const npxCmd = `@echo off\r\n"${process.execPath}" "${path.join(nodeDir, 'node_modules', 'npm', 'bin', 'npx-cli.js')}" %*\r\n`;
  fs.writeFileSync(path.join(nodeDir, 'npx.cmd'), npxCmd);
  console.log('npm.cmd and npx.cmd created at', nodeDir);
}

main().catch(console.error);
