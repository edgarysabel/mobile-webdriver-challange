## Overview

This project is designed to demonstrate a mobile testing framework using WebdriverIO with Appium for both iOS and Android platforms. The framework leverages TypeScript for scripting tests, providing a robust and type-safe way to automate mobile application testing.

### Key Features

- Page Object Model: Organizes code structure to enhance test maintenance and reduce code duplication.
- Cross-Platform Testing: Supports both iOS and Android platforms.
- TypeScript: Utilizes TypeScript for test scripts, offering type safety and modern JavaScript features.

## Prerequisites

Before running the tests, ensure you have the following prerequisites installed and configured:

- [Node.js and npm](https://nodejs.org/en/download/)
- [Appium](http://appium.io/) for managing mobile app automation
- [Android SDK](https://developer.android.com/studio) for Android testing (with configured environment variables)
- [Xcode](https://developer.apple.com/xcode/) for iOS testing
- An Android or iOS device or emulator/simulator setup for testing

## Installation

1. Clone the repository or download the source code to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install all the project dependencies.

## Configuration

Ensure the Appium server is running and your devices or emulators/simulators are set up and connected.

Modify the `wdio.ios.conf.ts` and `wdio.android.conf.ts` configuration files under the `./config` directory to match your testing environment, specifying the correct device names, platform versions, and app paths.

## Running Tests

This project is configured with separate scripts for running tests on iOS and Android platforms. Use the following commands to execute the tests:

### iOS Tests

```bash
npm run test:ios
```

### Android Tests

```bash
npm run test:android
```

## Test Structure

Tests are written using the Mocha test framework. The project structure includes:

- `./test/specs`: Contains test scripts.
- `./test/screenObjects`: Contains Page Object classes for encapsulating UI element interactions.
- `./config`: Contains WebdriverIO configuration files for iOS and Android.

## Reporting

Test results are reported in the console output. For enhanced reporting, consider integrating a reporting tool such as Allure.

## Contributing

Contributions to the Mobile WebDriver Challenge are welcome. Please ensure to follow the existing code structure and submit your pull requests for review.
