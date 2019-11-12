const targets = require('../targets/targets')

const dashboard_menulink = '#side-menu > li:nth-child(2) > a'
const bedrooms_menulink = '#side-menu > li:nth-child(3) > a'
const bills_menulink = '#side-menu > li:nth-child(4) > a'
const clients_menulink = '#side-menu > li:nth-child(5) > a'
const reservations_menulink = '#side-menu > li:nth-child(6) > a'
const users_menulink = '#side-menu > li:nth-child(7) > a'

function dashboardLink(){
    cy.get(dashboard_menulink).click()
}

function bedroomsLink(){
    cy.get(bedrooms_menulink).click()
    cy.get('#j_idt50 > table > thead > tr > th:nth-child(7)').should('contain', 'Bedroom Type')
}

function billsLink(){
    cy.get(bills_menulink).click()
    cy.get('#j_idt50 > table > thead > tr > th:nth-child(2)').should('contain', 'Bill Status')
}

function clientsLink(){
    cy.get(clients_menulink).click()
    cy.get('#j_idt50 > table > thead > tr > th:nth-child(6)').should('contain', 'Social Security Number')
}

function reservationsLink(){
    cy.get(reservations_menulink).click()
    cy.get('#j_idt50 > table > thead > tr > th:nth-child(7)').should('contain', 'Reservation Status')
}

function usersLink(){
    cy.get(users_menulink).click()
    cy.get('#j_idt50 > table > thead > tr > th:nth-child(2)').should('contain', 'User Type')
}

module.exports = {
    dashboardLink,
    bedroomsLink,
    billsLink,
    clientsLink,
    reservationsLink,
    usersLink
}