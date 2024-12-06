export class KeyMatcher {
  constructor(private readonly expression: RegExp) {}

  public match(text: string): string[] {
    const matches = text.matchAll(this.expression);
    return Array.from(matches, (match) => match[1]);
  }
}
