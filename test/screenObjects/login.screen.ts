import { $ } from "@wdio/globals";

class LoginScreen {
  get emailField() {
    return driver.isIOS
      ? $("~Email Field")
      : $('android=new UiSelector().resourceIdMatches(".*:id/EmailField")');
  }

  get passwordField() {
    return driver.isIOS
      ? $("~Password Field")
      : $('android=new UiSelector().resourceIdMatches(".*:id/PasswordField")');
  }

  get signInBtn() {
    return driver.isIOS
      ? $("~Sign In")
      : $('android=new UiSelector().resourceIdMatches(".*:id/SignInButton")');
  }
}
export default new LoginScreen();
