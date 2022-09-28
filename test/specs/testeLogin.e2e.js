const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const mystoreScreen = require("../screens/mystore.screen");
var assert = require('assert');

let usuario='gerente'
let senha='GD*peToHNJ1#c$sgk08EaYJQ'
let urlLoja='http://lojaebac.ebaconline.art.br/'

describe('Access Admin Panel', () => {
    it('shoud login with valid credentials', async () => {
        await homeScreen.gotoStarted()
        await homeScreen.gotoStarted2()
        await homeScreen.gotoLogin()
        await loginScreen.setStoreAddress(urlLoja)        
        await loginScreen.continue()       
        // await loginScreen.withStoreCredentials()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)
        await mystoreScreen.inicioMyStore()

        expect(await mystoreScreen.getStoreName()).toEqual('EBAC - Shop')
        
    });    
});