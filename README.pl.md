# 🎭 Nasłuchiwacze Zdarzeń z Playwright

Ten projekt pokaże Ci jak implementować **nasłuchiwanie zdarzeń** w testach Playwright. Dzięki temu możesz **przechwytywać i obsługiwać błędy** przeglądarki oraz błędy odpowiedzi HTTP **równolegle z wykonywaniem testów**!

> [!TIP]
> 💡 Wybierz swój język **README.md**:
>
> - 🇬🇧 [English](./README.md)
> - 🇵🇱 [Polski](./README.pl.md)

Projekt zawiera praktyczne przykłady monitorowania błędów konsoli i odpowiedzi HTTP podczas wykonywania testów.

> [!TIP]
> Chcesz dowiedzieć się więcej o Playwright?
> Sprawdź nasze kursy:
>
> - [Profesjonalna Automatyzacja z Playwright](https://jaktestowac.pl/playwright/) - kompleksowy kurs na temat Playwright, automatyzacji testów, projektowania profesjonalnego frameworka, CI/CD i architektury testów
> - [Playwright Elements](https://jaktestowac.pl/course/playwright-elements/) - kluczowe koncepcje i zaawansowane funkcje Playwright
> - [darmowe zasoby](https://jaktestowac.pl/darmowy-playwright/) - mega zbiór darmowych zasobów do nauki Playwright

# 📖 Spis Treści

- [🎯 Przegląd Projektu](#-przegląd-projektu)
- [🚀 Funkcjonalności](#-funkcjonalności)
- [🛠️ Wymagania](#-wymagania)
- [📦 Instalacja](#-instalacja)
- [🎮 Użycie](#-użycie)
  - [Uruchamianie Testów](#uruchamianie-testów)
  - [Struktura Projektu](#struktura-projektu)
- [📊 Raporty Testów](#-raporty-testów)
- [🔧 Konfiguracja](#-konfiguracja)
- [📚 Linki i Zasoby](#-linki-i-zasoby)
- [📞 Kontakt i Wsparcie](#-kontakt-i-wsparcie)
- [📚 Zasoby Edukacyjne](#-zasoby-edukacyjne)
  - [🇵🇱 Zasoby Polskie](#-zasoby-polskie)
  - [🇬🇧 Zasoby Angielskie](#-zasoby-angielskie)

## 🎯 Przegląd Projektu

To repozytorium zawiera przykłady:

- **Nasłuchiwanie Błędów Przeglądarki**: Przechwytywanie błędów konsoli JavaScript występujących w przeglądarce
- **Nasłuchiwanie Błędów Odpowiedzi**: Monitorowanie kodów statusu odpowiedzi HTTP i obsługa błędów serwera
- **Fixtury Testowe**: Wzorce wielokrotnego użytku do implementacji nasłuchiwania zdarzeń w wielu testach

## 🚀 Funkcjonalności

- ✅ Nasłuchiwanie błędów konsoli przeglądarki podczas wykonywania testów
- ✅ Monitorowanie błędów odpowiedzi HTTP (kody statusu 4xx, 5xx)
- ✅ Implementacja nasłuchiwania zdarzeń przy użyciu fixtur Playwright dla wielokrotnego użytku
- ✅ Praktyczne przykłady z aplikacją zamawiania w restauracji
- ✅ Różne podejścia implementacyjne (bezpośrednie vs oparte na fixturach)

## 🛠️ Wymagania

- Node.js (wersja 14 lub wyższa)
- Menedżer pakietów NPM lub Yarn
- [🦎GAD](https://github.com/jaktestowac/gad-gui-api-demo) - aplikacja testowa uruchomiona lokalnie na `http://localhost:3000`

> [!TIP]
> Jak uruchomić aplikację 🦎GAD?
>
> 1. Sklonuj repozytorium 🦎GAD: `git clone https://github.com/jaktestowac/gad-gui-api-demo.git`
> 2. Zainstaluj zależności: `npm install`
> 3. Uruchom aplikację: `npm start`
> 4. Otwórz aplikację w przeglądarce: [🦎GAD](http://localhost:3000)

## 📦 Instalacja

1. Sklonuj to repozytorium:

```bash
git clone https://github.com/jaktestowac/playwright-event-listeners.git
cd playwright-event-listeners
```

2. Zainstaluj zależności:

```bash
npm install
```

3. Zainstaluj przeglądarki Playwright:

```bash
npx playwright install
```

## 🎮 Użycie

### Uruchamianie Testów

```bash
# Uruchom wszystkie testy
npm test

# Uruchom testy w trybie UI
npm run test:ui

# Uruchom konkretny katalog testów
npx playwright test tests/listen-for-browser-errors
npx playwright test tests/listen-for-response-errors
```

### Struktura Projektu

```
tests/
├── listen-for-browser-errors/
│   ├── 1-example.spec.ts              # Podstawowe nasłuchiwanie błędów konsoli
│   ├── 2-example-with-fixture.spec.ts # Użycie fixtury do nasłuchiwania błędów
│   ├── 2-fixture.ts                   # Implementacja fixtury
│   └── 3-example-with-fixture.spec.ts # Zaawansowane użycie fixtury
└── listen-for-response-errors/
    ├── 1-example.spec.ts              # Podstawowe nasłuchiwanie błędów odpowiedzi
    ├── 2-example-with-fixture.spec.ts # Użycie fixtury do monitorowania odpowiedzi
    ├── 2-fixture.ts                   # Implementacja fixtury
    └── 3-example-with-fixture.spec.ts # Zaawansowane użycie fixtury
```

## Przykłady

### Nasłuchiwanie Błędów Przeglądarki

```typescript
// Nasłuchiwanie błędów konsoli
page.on("console", (data) => {
  if (data.type() === "error") {
    console.error(`❌ Komunikat błędu: ${data.text()}`);
  }
});
```

### Nasłuchiwanie Błędów Odpowiedzi

```typescript
// Nasłuchiwanie błędów odpowiedzi HTTP
page.on("response", (data) => {
  if (data.status() === 500) {
    console.error(`❌ Błąd odpowiedzi: ${data.status()} dla ${data.url()}`);
  }
});
```

### Używanie Fixtur

```typescript
// Tworzenie fixtury wielokrotnego użytku
export const test = base.extend({
  page: async ({ page }, use) => {
    page.on("console", (data) => {
      if (data.type() === "error") {
        console.error(`❌ Komunikat błędu: ${data.text()}`);
      }
    });
    await use(page);
  },
});
```

## 📊 Raporty Testów

Projekt generuje różne typy raportów:

- **Raport HTML**: Wizualne wyniki testów w `playwright-report/`
- **JUnit XML**: Wyniki testów w `test-results.xml`
- **Wyjście Konsoli**: Logi wykonywania testów w czasie rzeczywistym

## 🔧 Konfiguracja

Testy korzystają z `playwright.config.ts` do konfiguracji:

- **Bazowy URL**: `http://localhost:3000` (aplikacja demo GAD)
- **Przeglądarka**: Desktop Chrome
- **Reportery**: HTML, List, JUnit

## 📚 Linki i Zasoby

- [TypeScript](https://www.typescriptlang.org) - Dokumentacja TypeScript
- [Tsx](https://tsx.is/) - Środowisko wykonawcze TypeScript
- [Playwright Event Listeners](https://playwright.dev/docs/events) - Oficjalna dokumentacja Playwright
- [GAD GUI API Demo](https://github.com/jaktestowac/gad-gui-api-demo) - Aplikacja testowa używana w przykładach

# 📞 Kontakt i Wsparcie

Skontaktuj się z nami:

- 🌐 **Strona internetowa**: [jaktestowac.pl](https://jaktestowac.pl)
- 💼 **LinkedIn**: [jaktestowac.pl](https://www.linkedin.com/company/jaktestowac/)
- 💬 **Discord**: [Polska Społeczność Playwright](https://discord.gg/mUAqQ7FUaZ)
- 📧 **Wsparcie**: Sprawdź naszą stronę internetową, aby uzyskać dane kontaktowe

---

# 📚 Zasoby

Zebraliśmy kolekcję zasobów, które pomogą Ci nauczyć się i opanować Playwright, zarówno w języku polskim, jak i angielskim. Niezależnie od tego, czy jesteś początkujący, czy zaawansowany użytkownik, te zasoby pomogą Ci rozwinąć umiejętności i wiedzę.

## 🇵🇱 Polskie Zasoby

- [JavaScript and TypeScript for Testers](https://jaktestowac.pl/js-ts/) - Kompleksowy kurs (13h+) JavaScript i TypeScript dla testerów, z praktycznymi przykładami i ćwiczeniami
- [Professional Test Automation with Playwright](https://jaktestowac.pl/playwright/) - Kompleksowy kurs (100h+) Playwright, automatyzacji testów, CI/CD i architektury testów
- [Back-end Test Automation](https://jaktestowac.pl/api/) - Kompleksowy kurs (45h+) automatyzacji testów back-end z Postman, Mocha, Chai i Supertest
- [Free Playwright Resources](https://jaktestowac.pl/darmowy-playwright/) - Kompleksowe i darmowe polskie materiały edukacyjne
- [Playwright Basics](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cD2TCB__K7NP5XARaCzZYn7) - Seria YouTube (Polski)
- [Playwright Elements](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cAcpd-XN4pKeo-l4YK35FDA) - Zaawansowane koncepcje (Polski)
- [Playwright MCP](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4) - Kurs MCP (Polski)
- [Discord Community](https://discord.gg/mUAqQ7FUaZ) - Pierwsza polska społeczność Playwright!
- [Playwright Info](https://playwright.info/) - pierwszy i jedyny polski blog o Playwright

## 🇬🇧 Angielskie Zasoby

- [VS Code Extensions](https://marketplace.visualstudio.com/publishers/jaktestowac-pl) - Nasze darmowe wtyczki Playwright
- [Playwright Documentation](https://playwright.dev/docs/intro) - Oficjalna dokumentacja
- [Playwright GitHub](https://github.com/microsoft/playwright) - Kod źródłowy i zgłaszanie problemów

_PS. Po więcej zasobów i aktualizacji, śledź nas na naszej [stronie internetowej](https://jaktestowac.pl) i [GitHub](https://github.com/jaktestowac)._

---

**Udanego testowania i automatyzacji!** 🚀

**Zespół jaktestowac.pl** ❤️💚

_PS. Po więcej zasobów i aktualizacji, śledź nas na naszej [stronie internetowej](https://jaktestowac.pl) i [GitHub](https://github.com/jaktestowac)._

---

_Stworzone z ❤️💚 dla społeczności Playwright i automatyzacji testów_
