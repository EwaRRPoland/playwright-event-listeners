# 🎭 Playwright Event Listeners

This project will show you how to implement **event listeners** in Playwright tests. With this, you can **capture and handle errors** from the browser and HTTP response errors **in parallel with test execution**!

> [!TIP]
> 💡 Choose your language **README.md**:
>
> - 🇬🇧 [English](./README.md)
> - 🇵🇱 [Polski](./README.pl.md)

The project contains practical examples of monitoring console errors and HTTP responses during test execution.

> [!TIP]
> Want to learn more about Playwright?
> Check out our courses:
>
> - [Professional Automation with Playwright](https://jaktestowac.pl/playwright/) - a comprehensive course on Playwright, test automation, professional framework design, CI/CD and test architecture
> - [Playwright Elements](https://jaktestowac.pl/course/playwright-elements/) - key concepts and advanced features of Playwright
> - [free resources](https://jaktestowac.pl/darmowy-playwright/) - a mega collection of free resources to learn Playwright

# 📖 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [🚀 Features](#-features)
- [🛠️ Prerequisites](#-prerequisites)
- [📦 Installation](#-installation)
- [🎮 Usage](#-usage)
  - [Running Tests](#running-tests)
  - [Project Structure](#project-structure)
- [📊 Test Reports](#-test-reports)
- [🔧 Configuration](#-configuration)
- [📚 Links and Resources](#-links-and-resources)
- [📞 Contact & Support](#-contact--support)
- [📚 Resources](#-resources)
  - [🇵🇱 Polish Resources](#-polish-resources)
  - [🇬🇧 English Resources](#-english-resources)

## 🎯 Project Overview

This repository contains examples of:

- **Browser Error Listening**: Capturing JavaScript console errors that occur in the browser
- **Response Error Listening**: Monitoring HTTP response status codes and handling server errors
- **Test Fixtures**: Reusable patterns for implementing event listeners across multiple tests

## 🚀 Features

- ✅ Listen for browser console errors during test execution
- ✅ Monitor HTTP response errors (4xx, 5xx status codes)
- ✅ Implement event listeners using Playwright fixtures for reusability
- ✅ Practical examples with a restaurant ordering application
- ✅ Different implementation approaches (direct vs fixture-based)

## 🛠️ Prerequisites

- Node.js (version 14 or higher)
- NPM or Yarn package manager
- [🦎GAD](https://github.com/jaktestowac/gad-gui-api-demo) - test application running locally on `http://localhost:3000`

> [!TIP]
> How to run 🦎GAD application?
>
> 1. Clone the 🦎GAD repository: `git clone https://github.com/jaktestowac/gad-gui-api-demo.git`
> 2. Install dependencies: `npm install`
> 3. Start the application: `npm start`
> 4. Open the application in your browser: [🦎GAD](http://localhost:3000)

## 📦 Installation

1. Clone this repository:

```bash
git clone https://github.com/jaktestowac/playwright-event-listeners.git
cd playwright-event-listeners
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## 🎮 Usage

### Running Tests

```bash
# Run all tests
npm test

# Run tests with UI mode
npm run test:ui

# Run specific test directory
npx playwright test tests/listen-for-browser-errors
npx playwright test tests/listen-for-response-errors
```

### Project Structure

```
tests/
├── listen-for-browser-errors/
│   ├── ❌1-example.spec.ts              # Basic console error listening
│   ├── ❌2-example-with-fixture.spec.ts # Using fixture for error listening
│   ├── 2-fixture.ts                   # Fixture implementation
│   └── 3-example-with-fixture.spec.ts # Advanced fixture usage
└── listen-for-response-errors/
    ├── ❌1-example.spec.ts              # Basic response error listening
    ├── ❌2-example-with-fixture.spec.ts # Using fixture for response monitoring
    ├── 2-fixture.ts                   # Fixture implementation
    └── 3-example-with-fixture.spec.ts # Advanced fixture usage
```

## Examples

### Browser Error Listening

```typescript
// Listen for console errors
page.on("console", (data) => {
  if (data.type() === "error") {
    console.error(`❌ Error message: ${data.text()}`);
  }
});
```

### Response Error Listening

```typescript
// Listen for HTTP response errors
page.on("response", (data) => {
  if (data.status() === 500) {
    console.error(`❌ Error response: ${data.status()} for ${data.url()}`);
  }
});
```

### Using Fixtures

```typescript
// Create reusable fixture
export const test = base.extend({
  page: async ({ page }, use) => {
    page.on("console", (data) => {
      if (data.type() === "error") {
        console.error(`❌ Error message: ${data.text()}`);
      }
    });
    await use(page);
  },
});
```

## 📊 Test Reports

The project generates multiple types of reports:

- **HTML Report**: Visual test results in `playwright-report/`
- **JUnit XML**: Test results in `test-results.xml`
- **Console Output**: Real-time test execution logs

## 🔧 Configuration

Tests use `playwright.config.ts` for configuration:

- **Base URL**: `http://localhost:3000` (GAD demo app)
- **Browser**: Desktop Chrome
- **Reporters**: HTML, List, JUnit

## 📚 Links and Resources

- [TypeScript](https://www.typescriptlang.org) - TypeScript documentation
- [Tsx](https://tsx.is/) - A TypeScript execution environment
- [Playwright Event Listeners](https://playwright.dev/docs/events) - Official Playwright documentation
- [GAD GUI API Demo](https://github.com/jaktestowac/gad-gui-api-demo) - Test application used in examples

# 📞 Contact & Support

Feel free to reach out to us:

- 🌐 **Website**: [jaktestowac.pl](https://jaktestowac.pl)
- 💼 **LinkedIn**: [jaktestowac.pl](https://www.linkedin.com/company/jaktestowac/)
- 💬 **Discord**: [Polish Playwright Community](https://discord.gg/mUAqQ7FUaZ)
- 📧 **Support**: Check our website for contact details

---

# 📚 Resources

We have gathered a collection of resources to help you learn and master Playwright, both in Polish and English. Whether you're a beginner or an advanced user, these resources will help you enhance your skills and knowledge.

## 🇵🇱 Polish Resources

- [JavaScript and TypeScript for Testers](https://jaktestowac.pl/js-ts/) - Comprehensive (13h+) course on JavaScript and TypeScript for testers, with practical examples and exercises
- [Professional Test Automation with Playwright](https://jaktestowac.pl/playwright/) - Comprehensive (100h+) course on Playwright, test automation, CI/CD and test architecture
- [Back-end Test Automation](https://jaktestowac.pl/api/) - Comprehensive (45h+) course on Back-end Test Automation with Postman, Mocha, Chai, and Supertest
- [Free Playwright Resources](https://jaktestowac.pl/darmowy-playwright/) - Comprehensive and Free Polish learning materials
- [Playwright Basics](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cD2TCB__K7NP5XARaCzZYn7) - YouTube series (Polish)
- [Playwright Elements](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cAcpd-XN4pKeo-l4YK35FDA) - Advanced concepts (Polish)
- [Playwright MCP](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4) - MCP course (Polish)
- [Discord Community](https://discord.gg/mUAqQ7FUaZ) - First Polish Playwright community!
- [Playwright Info](https://playwright.info/) - first and only Polish Playwright blog

## 🇬🇧 English Resources

- [VS Code Extensions](https://marketplace.visualstudio.com/publishers/jaktestowac-pl) - Our free Playwright plugins
- [Playwright Documentation](https://playwright.dev/docs/intro) - Official documentation
- [Playwright GitHub](https://github.com/microsoft/playwright) - Source code and issues

_PS. For more resources and updates, follow us on our [website](https://jaktestowac.pl) and [GitHub](https://github.com/jaktestowac)._

---

**Happy testing and automation!** 🚀

**jaktestowac.pl Team** ❤️💚

_PS. For more resources and updates, follow us on our [website](https://jaktestowac.pl) and [GitHub](https://github.com/jaktestowac)._

---

_Built with ❤️💚 for the Playwright and test automation community_
