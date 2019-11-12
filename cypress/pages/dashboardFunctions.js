const targets = require('../targets/targets')

const bedroomslink = '#page-wrapper > div > div > div > div > div:nth-child(2) > div > a > div > span.pull-left'
const bills_dashboardlink = '#page-wrapper > div > div > div > div > div:nth-child(3) > div > a > div > span.pull-left'
const clients_dashboardlink = '#page-wrapper > div > div > div > div > div:nth-child(4) > div > a > div > span.pull-left'
const reservations_dashboardlink = '#page-wrapper > div > div > div > div > div:nth-child(5) > div > a > div > span.pull-left'

function bedroomsLink(){
    cy.get(bedroomslink).click()
    cy.get('#j_idt50 > table > thead > tr > th:nth-child(7)').should('contain', 'Bedroom Type')
}

function billsLink() {
    cy.get(bills_dashboardlink).click()
    cy.get('#j_idt50 > table > thead > tr > th:nth-child(2)').should('contain', 'Bill Status')
}

function clientsLink() {
    cy.get(clients_dashboardlink).click()
    cy.get('#j_idt50 > table > thead > tr > th:nth-child(6)').should('contain', 'Social Security Number')
}

function reservationsLink() {
    cy.get(reservations_dashboardlink).click()
    cy.get('#j_idt50 > table > thead > tr > th:nth-child(7)').should('contain', 'Reservation Status')
}

module.exports = {
    bedroomsLink,
    billsLink,
    clientsLink,
    reservationsLink
}