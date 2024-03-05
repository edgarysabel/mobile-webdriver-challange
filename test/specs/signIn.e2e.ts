import LoginScreen from "../screenObjects/login.screen";
import loginData = require("../../utils/testData/loginData");
import MyAccountScreen from "../screenObjects/myAccount.screen";
import LoginErrorScreen from "../screenObjects/loginError.screen";
import CommonActions from "../../utils/commonActions.ts";

describe("Mobile application Sign In", () => {
  it("Successful Log In .", async () => {
    await expect(LoginScreen.emailField).toBeDisplayed();
    await CommonActions.signIn(
      loginData.credentials.validEmail,
      loginData.credentials.validPassword
    );
    await expect(MyAccountScreen.headerText).toBeDisplayed();
  });

  it("Unsuccessful Log In.", async () => {
    await expect(LoginScreen.emailField).toBeDisplayed();
    await CommonActions.signIn(
      loginData.credentials.invalidEmail,
      loginData.credentials.invalidPassword
    );
    await expect(LoginErrorScreen.invalidEmailError).toBeDisplayed();
  });
});
