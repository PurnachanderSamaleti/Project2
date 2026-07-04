import { test, expect } from'@playwright/test';
import { Login } from '../Pages/Login';
import { Credentials } from '../TestData/Credentials';
import { Environments } from '../TestData/Environments';

test('Validate login page', async ({ page }) => {
    const login = new Login(page);

    await login.goto(Environments.Test_Env);
    await login.LoginForm(Credentials.Customer.Username, Credentials.Customer.Password);
})