const targets = require('../targets/targets')

function logInUser(username, password){
    cy.visit(targets.login_url)
        cy.title().should('eq','Hotel Accomodation - login page')
        cy.get('#login').type(username)
        cy.get('#senha').type(password)
        cy.get('#loginBtn').click()
}
function logOutUser(){
    cy.get('.dropdown-toggle').click()
        cy.get('#wrapper > nav > ul > li.dropdown.open > ul > li > a').click()
        cy.url().should('eq', targets.login_url)
}

module.exports = {
    logInUser,
    logOutUser
}