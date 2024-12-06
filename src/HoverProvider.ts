import vscode from "vscode";
import {
  GetTranslationDto,
  KeyParser,
  ParseKeysDto,
  TranslationGetter,
} from "./application";

export class HoverProvider implements vscode.HoverProvider {
  constructor(
    private readonly keyParser: KeyParser,
    private readonly translationGetter: TranslationGetter
  ) {}

  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.Hover | null {
    const range = document.getWordRangeAtPosition(
      position,
      /t\(['"]([\w\.]+)['"]\)/
    );
    if (!range) {
      return null;
    }

    const keyMatch = this.keyParser.parse(
      new ParseKeysDto({ code: document.getText(range) })
    );
    if (!keyMatch.length) {
      return null;
    }

    const key = keyMatch[0];

    const translation = this.translationGetter.get(
      new GetTranslationDto({ key })
    );

    if (!translation) {
      return null;
    }

    return new vscode.Hover(`**Translation**: ${translation}`);
  }
}
