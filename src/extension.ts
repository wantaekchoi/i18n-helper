import vscode from "vscode";
import {
  FileLoader,
  JsonParser,
  KeyMatcher,
  KeyParser,
  TranslationGetter,
} from "./application";
import { HoverProvider } from "./HoverProvider";

export function activate(context: vscode.ExtensionContext) {
  const regExp = /t\(['"]([\w\.]+)['"]\)/g;
  const keyMatcher = new KeyMatcher(regExp);
  const keyParser = new KeyParser(keyMatcher);

  const localePath = "/path/to/locales";
  const fileLoader = new FileLoader(localePath);
  const jsonParser = new JsonParser();
  const translationGetter = new TranslationGetter(fileLoader, jsonParser);

  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      ["javascript", "typescript"],
      new HoverProvider(keyParser, translationGetter)
    )
  );
}

export function deactivate() {}
