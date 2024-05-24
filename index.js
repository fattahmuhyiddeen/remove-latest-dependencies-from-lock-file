// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

const read = (filename) =>
  fs.readFileSync(filename, { encoding: "utf8", flag: "r" });

try {
  const { dependencies, devDependencies } = JSON.parse(read("package.json"));
  const lockFile = JSON.parse(read("package-lock.json"));
  for (const key in dependencies) {
    if (dependencies[key] === "latest") {
      delete lockFile.packages["node_modules/" + key];
    }
  }
  for (const key in devDependencies) {
    if (devDependencies[key] === "latest") {
      delete lockFile.packages["node_modules/" + key];
    }
  }
  fs.writeFile(
    "package-lock.json",
    JSON.stringify(lockFile, undefined, 2) + "\n",
    "utf8",
    () => null
  );
} catch (err) {
  console.log(err);
}
