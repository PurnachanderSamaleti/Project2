import { Credentials } from "../TestData/Credentials";
import { Environments } from "../TestData/Environments";
export class Login{
    constructor(page){
        this.page = page;
        this.usernameInput = page.locator('//input[@data-qa="login-email"]');
        this.passwordInput = page.locator('//input[@data-qa="login-password"]');
        this.loginBtn = page.locator('//button[@data-qa="login-button"]');
        this.Homepage = page.locator('//img[@alt="Website for automation practice"]');
    }
    async goto(Test_Env){
        await this.page.goto(Test_Env);
    }
    async LoginForm(Username, Password){
        await this.usernameInput.fill(Username);
        await this.passwordInput.fill(Password);
        await this.loginBtn.click();
    }
}