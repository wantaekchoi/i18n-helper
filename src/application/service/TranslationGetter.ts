import { GetTranslationDto } from "./dto";
import { FileLoader } from "../provider/FileLoader";
import { JsonParser } from "../provider/JsonParser";
import { Nullable } from "../../type/Nullable";

export class TranslationGetter {
  private translations: Nullable<Record<string, string>>;

  constructor(
    private readonly fileLoader: FileLoader,
    private readonly jsonParser: JsonParser
  ) {
    this.translations = this.loadTranslations();
  }

  private loadTranslations() {
    const fileContent = this.fileLoader.load();
    return this.jsonParser.parse(fileContent);
  }

  public get({ key }: GetTranslationDto): Nullable<string> {
    if (!this.translations) {
      return null;
    }

    return this.translations[key] || null;
  }

  public reload(): void {
    this.translations = this.loadTranslations();
  }
}
