import { $ } from "@wdio/globals";

class MyAccountScreen {
  get signOutButton() {
    return driver.isIOS
      ? $("~Sign Out")
      : $('android=new UiSelector().resourceIdMatches(".*:id/SignOutButton")');
  }
  get signInButton() {
    return driver.isIOS
      ? $('-ios class chain:**/XCUIElementTypeButton[`label == "SigIn"`]')
      : $('android=new UiSelector().resourceIdMatches(".*:id/Sign In Button")');
  }
  get headerText() {
    return driver.isIOS
      ? $(
          '-ios class chain:**/XCUIElementTypeStaticText[`label == "My Account"`]'
        )
      : $('android=new UiSelector().resourceIdMatches(".*:id/My Account")');
  }
}

export default new MyAccountScreen();
