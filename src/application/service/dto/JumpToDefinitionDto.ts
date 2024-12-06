export class JumpToDefinitionDto {
  private readonly key: string;
  constructor({ key }: JumpToDefinitionDto) {
    this.key = key;
  }

  getKey(): string {
    return this.key;
  }
}
