import fs from 'fs';
import path from 'path';

const baseDir = 'src/components/icon/components';

function walk(dir: string): string[] {
    return fs.readdirSync(dir).flatMap((file) => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            return walk(fullPath);
        }
        return fullPath;
    });
}

const files = walk(baseDir).filter((f) => f.endsWith('.tsx'));

const lines = files.map((file) => {
    const normalized = file.split(path.sep).join('/');
    const relative = normalized.replace(baseDir + '/', '').replace('.tsx', '');

    const name = path.basename(relative);

    return `export { default as ${name} } from "./${relative}";`;
});

fs.writeFileSync(path.join(baseDir, 'index.ts'), lines.join('\n'));

console.log('✅ icon index generated');
