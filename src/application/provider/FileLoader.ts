import * as fs from "fs";

export class FileLoader {
  constructor(private readonly filePath: string = "en.json") {}
  public load(): string {
    return fs.readFileSync(this.filePath, "utf-8");
  }
}
