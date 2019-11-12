import * as loginFuncs from '../pages/loginFunctions'
import * as dashboardFuncs from '../pages/dashboardFunctions'
import * as sidemenuFuncs from '../pages/sidemenuFunctions'
import * as createFuncs from '../pages/createFunctions'
const targets = require('../targets/targets')


describe('Hotel Accomodations - Test Suite', function(){
    it('TC_01 - Attempt to log in with incorrect password', function(){
        loginFuncs.logInUser(targets.user_username, targets.password_wrong)
        cy.contains(targets.login_error).should('be.visible')
    })
    it('TC_02 - Attempt to log in with username from one user and password from another', function(){
        loginFuncs.logInUser(targets.user_username_wrong, targets.password)
        cy.contains(targets.login_error).should('be.visible')
    })
    it('TC_03 - Attempt to log in with correct username and password', function(){
        loginFuncs.logInUser(targets.user_username, targets.password)
        cy.url().should('eq', targets.dashboard_url)
    })
    it('TC_04 - Attempt to log out a logged in user', function(){
        loginFuncs.logInUser(targets.user_username, targets.password)
        loginFuncs.logOutUser()
        cy.url().should('eq', targets.login_url)
    })
    it('TC_05 - Confirm you can view the list of Bills', function(){
        //login for test
        loginFuncs.logInUser(targets.user_username, targets.password)
        //test case start
        dashboardFuncs.billsLink()
        sidemenuFuncs.dashboardLink()
        sidemenuFuncs.billsLink()
    })
    it('TC_06 - Confirm you can view the list of Clients', function(){
        //login for test
        loginFuncs.logInUser(targets.user_username, targets.password)
        //test case start
        dashboardFuncs.clientsLink()
        sidemenuFuncs.dashboardLink()
        sidemenuFuncs.clientsLink()
    })
    it('TC_07 - Confirm you can view the list of Reservations', function(){
        //login for test
        loginFuncs.logInUser(targets.user_username, targets.password)
        //test case start
        dashboardFuncs.reservationsLink()
        sidemenuFuncs.dashboardLink()
        sidemenuFuncs.reservationsLink()
    })
    it('TC_08 - Confirm admin can view the users', function(){
        loginFuncs.logInUser(targets.admin_username, targets.password)
        sidemenuFuncs.usersLink()
    })
    it('TC_09 - Create new bedroom as admin', function(){
        //login for test
        loginFuncs.logInUser(targets.admin_username, targets.password)
        //test case start
        dashboardFuncs.bedroomsLink()
        createFuncs.createBedroom(targets.roomName, targets.floorNumber, targets.roomNumber, targets.dailyPrice, targets.roomStatus, targets.roomType)
    })
    it('TC_10 - Remove a bedroom as admin', function(){
        //login for test
        loginFuncs.logInUser(targets.admin_username, targets.password)
        //test case start
        sidemenuFuncs.bedroomsLink()
        createFuncs.removeBedroom()
    })
})