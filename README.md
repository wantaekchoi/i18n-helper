# i18n Helper

**i18n Helper**는 다국어 지원 프로젝트에서 다국어 키를 관리하고 탐색하는 작업을 더 쉽고 효율적으로 만들어주는 Visual Studio Code 확장입니다.

---

## **Features**

- **다국어 키 파싱**: 코드에서 다국어 키(예: `t('key.path')`)를 자동으로 감지합니다.
- **번역 툴팁 표시**: 다국어 키 위에 커서를 올리면 JSON 파일에서 번역된 값을 툴팁으로 표시합니다.
- **정의로 점프**: `Ctrl + Click` 또는 `Cmd + Click`으로 해당 키가 정의된 JSON 파일로 빠르게 이동합니다.
- **자동 완성 지원**: 다국어 키 입력 시 자동 완성 제안을 제공합니다.
- **다국어 JSON 파일 관리**: 여러 언어 파일(`en.json`, `ko.json` 등) 지원.

---

## **Installation**

### **1. Visual Studio Code Marketplace**
- Visual Studio Code의 확장 마켓플레이스에서 "i18n Helper"를 검색하여 설치합니다.

### **2. 로컬 설치**
1. `.vsix` 파일 다운로드:
   - GitHub Release 페이지 또는 직접 빌드하여 `.vsix` 파일을 준비합니다.
2. VSCode에서 명령 팔레트 열기:
   - Windows/Linux: `Ctrl + Shift + P`
   - macOS: `Cmd + Shift + P`
3. "Install from VSIX..." 명령 실행 후 `.vsix` 파일 선택.

---

## **Usage**

### **1. 다국어 키 파싱 및 툴팁 표시**
- 코드에서 다국어 키(예: `t('app.title')`) 위에 커서를 올리면 해당 키의 번역이 툴팁으로 표시됩니다.

### **2. 정의로 점프**
- 다국어 키를 클릭하면서 `Ctrl`(Windows/Linux) 또는 `Cmd`(macOS)를 누르면 JSON 파일 내 해당 키 정의로 이동합니다.

### **3. 자동 완성**
- 다국어 키를 입력할 때 자동 완성 제안이 나타납니다. (예: `t('app.` 입력 시 관련 키 추천)

---

## **Configuration**

### **Settings**
확장은 사용자 설정을 통해 동작을 커스터마이즈할 수 있습니다. 다음은 주요 설정 옵션입니다:

```json
{
  "i18n-helper.localesPaths": ["./locales"], // 다국어 JSON 파일 경로
  "i18n-helper.defaultLocale": "en",         // 기본 언어 설정
  "i18n-helper.translationFunctionNames": ["t", "$t"] // 번역 함수 이름
}
```

### **JSON 파일 구조**
다음과 같은 구조의 JSON 파일을 사용하는 것을 권장합니다:

```json
{
  "app": {
    "title": "My Application",
    "description": "This is a sample application."
  }
}
```

---

## **Development**

### **Prerequisites**
- Node.js (v16 이상)
- npm 또는 yarn

### **Build and Test**
1. 프로젝트 클론:
   ```bash
   git clone https://github.com/your-repo/i18n-helper.git
   cd i18n-helper
   ```
2. 의존성 설치:
   ```bash
   npm install
   ```
3. 테스트 실행:
   ```bash
   npm run test
   ```
4. 확장 실행:
   - Visual Studio Code에서 프로젝트를 열고 `F5`를 눌러 확장을 실행합니다.

5. 패키징:
   ```bash
   npx @vscode/vsce package
   ```

---

## **Contributing**

기여를 환영합니다! 다음 단계를 따라 기여할 수 있습니다:

1. 이슈 제출:
   - 버그나 기능 요청이 있다면 [GitHub Issues](https://github.com/your-repo/i18n-helper/issues)에 제출하세요.
2. Pull Request 생성:
   - 새로운 기능을 추가하거나 버그를 수정한 경우 PR을 제출하세요.
3. 기여 가이드라인:
   - 코딩 스타일과 테스트 커버리지를 준수해주세요.

---

## **License**

이 프로젝트는 [MIT License](./LICENSE) 하에 배포됩니다.

---

## **Acknowledgements**

이 확장은 다국어 지원 워크플로우를 개선하기 위해 만들어졌으며, 커뮤니티의 피드백과 기여에 감사드립니다.
