import { KeyMatcher } from "../provider/KeyMatcher";
import { ParseKeysDto } from "./dto";

export class KeyParser {
  constructor(private readonly keyMatcher: KeyMatcher) {}

  public parse({ code }: ParseKeysDto): string[] {
    return this.keyMatcher.match(code);
  }
}
