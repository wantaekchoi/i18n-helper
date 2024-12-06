import { Nullable } from "../../type";
import { JumpToDefinitionDto } from "./dto";
import { FileLoader } from "../provider/FileLoader";

export class PositionGetter {
  constructor(private readonly fileLoader: FileLoader) {}

  public getPosition(dto: JumpToDefinitionDto): Nullable<{
    line: number;
    column: number;
  }> {
    const key = `"${dto.getKey()}"`;
    const fileContent = this.fileLoader.load();
    const lines = fileContent.split("\n");
    const lineIndex = lines.findIndex((line) => line.includes(key));
    if (lineIndex === -1) {
      return null;
    }
    const columnIndex = lines[lineIndex].indexOf(key);
    return { line: lineIndex, column: columnIndex };
  }
}
