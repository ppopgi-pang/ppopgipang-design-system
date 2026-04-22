import fs from "fs";
import path from "path";

const baseDir = "src/components/icon/components";
const outputFile = "src/components/icon/icon-map.ts";

function walk(dir: string): string[] {
  return fs.readdirSync(dir).flatMap((file) => {
    const full = path.join(dir, file);
    return fs.statSync(full).isDirectory() ? walk(full) : full;
  });
}

const files = walk(baseDir).filter((f) => f.endsWith(".tsx"));

const imports: string[] = [];
const mapEntries: string[] = [];

files.forEach((file) => {
  const relative = file.replace(baseDir + "/", "").replace(".tsx", "");

  const componentName = path.basename(relative);

  imports.push(`import ${componentName} from "./components/${relative}";`);

  mapEntries.push(`${componentName},`);
});

const content = `
${imports.join("\n")}

export const ICON_MAP = {
${mapEntries.join("\n")}
} as const;

export type IconName = keyof typeof ICON_MAP;
`;

fs.writeFileSync(outputFile, content);

console.log("✅ icon map generated");
