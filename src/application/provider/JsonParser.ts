export class JsonParser {
  public parse(text: string): Record<string, string> {
    return JSON.parse(text);
  }
}
