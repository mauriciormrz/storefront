class EndPage {

    getLogOutMessageText() {

        return cy.xpath("//div[contains(text(),'You have been logged out.')]");
    }

}

export default EndPage;