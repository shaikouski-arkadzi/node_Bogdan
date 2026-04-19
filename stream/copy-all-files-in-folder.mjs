import fs from "fs";
import path from "path";

const sourceDir = "./files";
const outDir = "./copied-files";

if (!fs.existsSync(sourceDir)) {
  console.log(`Source dir ${sourceDir} doesn't exists`);
  process.exit(0);
}

if (fs.existsSync(outDir)) {
  fs.rmdirSync(outDir, { recursive: true, force: true });
  console.log("Clean out dir");
}

fs.mkdirSync(outDir);

fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  fileNames.forEach((fileName, index) => {
    const sourceFilePath = path.join(sourceDir, fileName);
    const outFilePath = path.join(outDir, `${index + 1}.${fileName}`);

    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(outFilePath);

    readStream.pipe(writeStream);

    writeStream.on("finish", () =>
      console.log(`Done. File ${fileName} was copied`),
    );
  });
});
