export class GetTranslationDto {
  readonly key: string;
  constructor({ key }: GetTranslationDto) {
    this.key = key;
  }
}
