class HomeScreen {
    get skip() {
        return $('id=button_skip')        
    }
     
    async gotoStarted() {        
        await this.skip.waitForDisplayed()
        await this.skip.click()
    }

    get skip2() {
        return $('id:survey_button_skip')        
    }

    async gotoStarted2() {        
        await this.skip2.waitForDisplayed()
        await this.skip2.click()
    }

    get enterStoreAddress () {
        return $('id=com.woocommerce.android:id/button_login_store')
    }    

    async gotoLogin() {
        await this.enterStoreAddress.waitForDisplayed()        
        await this.enterStoreAddress.click()
    }
}

module.exports = new HomeScreen ()