import { $ } from "@wdio/globals";

class LoginErrorScreen {
  get invalidEmailError() {
    return driver.isIOS
      ? $(
          '-ios class chain:**/XCUIElementTypeStaticText[`label == "Long Error String For Invalid Email"`]'
        )
      : $(
          'android=new UiSelector().resourceIdMatches(".*:id/Long Error String For Invalid Email")'
        );
  }
  get invalidPasswordError() {
    return driver.isIOS
      ? $(
          '-ios class chain:**/XCUIElementTypeStaticText[`label == "Long Error String For Invalid Password"`]'
        )
      : $(
          'android=new UiSelector().resourceIdMatches(".*:id/Long Error String For Invalid Password")'
        );
  }
  get forgotPasswordButton() {
    return driver.isIOS
      ? $(
          '-ios class chain:**/XCUIElementTypeButton[`label == "Forgot Password"`]'
        )
      : $(
          'android=new UiSelector().resourceIdMatches(".*:id/Forgot Password Button")'
        );
  }
}
export default new LoginErrorScreen();
