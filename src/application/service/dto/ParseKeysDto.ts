export class ParseKeysDto {
  readonly code: string;
  constructor({ code }: ParseKeysDto) {
    this.code = code;
  }
}
