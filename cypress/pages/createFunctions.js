const targets = require('../targets/targets')

const linkToList = '#j_idt51 > a:nth-child(11)'
const listChecker = '#j_idt50 > table > tbody > tr:nth-child(7) > td:nth-child(2)'
const linkToCreate = '#j_idt50 > a.btn.btn-primary'
const linkToRemove = '#j_idt50 > table > tbody > tr:nth-child(7) > td:nth-child(8) > a:nth-child(3)'

function createBedroom(roomName, floorNumber, roomNumber, dailyPrice, roomStatus, roomType){
    cy.get(linkToCreate).click()
    cy.get('#description').type(roomName)
    cy.get('#floor').type(floorNumber)
    cy.get('#number').type(roomNumber)
    cy.get('#priceDaily').type(dailyPrice)
    cy.get('#bedroomStatusId').select(roomStatus)
    cy.get('#typeBedroomId').select(roomType)
    cy.get('#saveBtn').click()
    cy.contains('Bedroom was successfully created.').should('be.visible')
    cy.get(linkToList).click()
    cy.get(listChecker).should('contain', roomName)
}

function removeBedroom(){
    cy.get(linkToRemove).click()
    cy.get(listChecker).should('not.exist')
}

module.exports = {
    createBedroom,
    removeBedroom
}