class myStoreScreen {
    get #myStoreNameBefore() {
        return $('id=close_feature_announcement_button')
    }
    
    async inicioMyStore() {
        await this.#myStoreNameBefore.waitForDisplayed({ timeout: 10000 })
        await this.#myStoreNameBefore.click()
    }

    get #myStoreName() {
        return $('id=toolbar_subtitle')
    }
    
    async getStoreName() {
        await this.#myStoreName.waitForDisplayed()
        return await this.#myStoreName.getText()
    }

}

module.exports = new myStoreScreen()