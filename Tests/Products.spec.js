import {test, expect } from '@playwright/test';
import { Login } from '../Pages/Login';
import { Products } from '../Pages/Products';
import { Credentials } from '../TestData/Credentials';
import { Environments } from '../TestData/Environments';

test('Validate Products page', async({page})=> {
    const login = new Login(page);
    await login.goto(Environments.Test_Env);
    await login.LoginForm(Credentials.Customer.Username, Credentials.Customer.Password);
    const product = new Products(page);
    await product.SearchProducts('T-shirts');
    await product.WomenCategory.click();
    await product.Tops.click();
    await product.WinterTopImage.hover();
    await product.WinterTop.click();
})