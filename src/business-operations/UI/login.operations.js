import { t } from 'testcafe';
import { LoginPage } from "../../components/pages/login.page";

export class LoginOperations {
    loginPage;

    constructor() {
        this.loginPage = new LoginPage();
    }

    async validateCorrectLogin() {
        await t
            .expect(this.loginPage.title.textContent).eql("Login Page")
            .typeText(this.loginPage.usernameInput, 'tomsmith') // Username correcto
            .typeText(this.loginPage.passwordInput, 'SuperSecretPassword!') // Password correcta
            .click(this.loginPage.loginButton)
            .expect(this.loginPage.secureArea.textContent).eql(' Secure Area') // Verificar que se ingresa al área segura
            .expect(this.loginPage.secureAreaMessage.textContent).contains('You logged into a secure area!'); // Verificar mensaje de éxito
    }

    async validateFailedLogin() {
        await t
            .typeText(this.loginPage.usernameInput, 'wronguser') // Username incorrecto
            .typeText(this.loginPage.passwordInput, 'wrongpassword') // Password incorrecta
            .click(this.loginPage.loginButton)
            .expect(this.loginPage.errorMessage.textContent).contains('Your username is invalid!'); // Verificar mensaje de error
    }
}