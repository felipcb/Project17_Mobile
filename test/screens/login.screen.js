class LoginScreen {
    get storeAddressBefore() {
        return $('id=com.woocommerce.android:id/input')
    }

    async setStoreAddressBefore() {
        await this.storeAddressBefore.click()
    }

    get storeAddress() {
        return $('id=com.woocommerce.android:id/input')
    }

    async setStoreAddress(url) {
        await this.storeAddress.setValue(url)
    }
 
    get #continue() {
        return $('id:bottom_button')
    }

    get #userName() {        
        return $('android=new UiSelector().text("Username")')
    }

    get #password() {
        return $('android=new UiSelector().text("Password")')
    }

    get #twoFactorPasswordBtn() {
        return $('id:login_enter_password')
    }
    
    async continue() {
        await this.#continue.click()
    }

    async login(username, password) {
        await this.#userName.waitForDisplayed({ timeout: 20000 })
        await this.#userName.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
        
    }

    async goToTwoFactorAuth() {
        await this.#twoFactorPasswordBtn.click()
    }

    async twoFactorLogin(password) {
        await this.#password.setValue(password)
        await this.#continue.click()
    }


}

module.exports = new LoginScreen ()