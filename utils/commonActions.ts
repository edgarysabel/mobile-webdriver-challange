import LoginScreen from "../test/screenObjects/login.screen";

class CommonActions {
  async signIn(email: string, password: string) {
    await LoginScreen.emailField.setValue(email);
    await LoginScreen.passwordField.setValue(password);
    await LoginScreen.signInBtn.click();
  }
}
export default new CommonActions();
