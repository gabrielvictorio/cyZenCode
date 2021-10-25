describe('example to-do app', () => {


    var elementsList = {
    industryDataInputField: '[data-qa-hook="industry-selector"]',
    industryDataOutputField:'[data-qa-hook="industries-data"]',
    nextButton:'[data-testid="next-button"]',
    grossRevenueSlider:'.rc-slider',
    confirmationPrompcht:'.sc-kAzzGY',
    inpuptEmailField:'input[type="email"]',
    errorPopUpField:'.frame-me',
    errorsAboveTextContainer:'.sc-cMljjf',
  }


    beforeEach(() => {
        cy.visit('/')
    })

    it.skip('First Assigment', () => {
        cy.get('[data-qa-hook="industry-selector"]')
          .type("faw")
        cy.get('[data-qa-hook="industries-data"]')
          .should('be.empty')
        cy.get('[data-testid="next-button"]')
          .click()
        cy.get('.frame-me')
          .should('be.visible')
          .contains('Please select an industry')
        cy.get('.sc-cMljjf')
          .should('be.visible')
          .contains('There are a few errors above')

    })

    it.skip('Second Assigment', () => {
        cy.get('[data-qa-hook="industry-selector"]')
          .type("hair")
        cy.get('[data-qa-hook="industries-data"]')
          .find('li')
          .its('length')
          .should('be.gt', 2)
        cy.get('[data-qa-hook="industries-data"]')
          .contains('li')
          .should('contain', 'Hairstylist / Barber', 'Beauty, Spa, and Aesthetics')
          .click()        
        cy.contains('$70,000')
          .click() 
        cy.get('.sc-kAzzGY')
          .contains('Yes')
          .click()
        cy.get('[data-testid="next-button"')
          .click()
          .wait(2000) 
        cy.get('.rc-slider')
          .children('.rc-slider-handle')
          .move({ deltaX: 200, deltaY: 0 })
        cy.get('.sc-kAzzGY')
          .contains('Yes')
          .click()
        cy.get('[data-testid="next-button"')
          .click()
          .wait(1000) 
        cy.get('input[type="email"]')
          .type('asdf@u4fb2')        
        cy.get('[data-testid="next-button"')
          .click()
        cy.get('.frame-me')
          .should('be.visible')
          .contains('Please enter a valid email address (ex: john@example.com)')
        cy.get('.sc-cMljjf')
          .should('be.visible')
          .contains('There are a few errors above')
    })

    it.only('Third Assigment', () => {

      cy.get('[data-qa-hook="industry-selector"]')
        .type("hair")
      cy.get('[data-qa-hook="industries-data"]')
        .find('li')
        .its('length')
        .should('be.gt', 2)
      cy.get('[data-qa-hook="industries-data"]')
        .contains('li')
        .should('contain', 'Hairstylist / Barber', 'Beauty, Spa, and Aesthetics')
        .click()        
      cy.contains('$70,000')
        .click() 
      cy.get('.sc-kAzzGY')
        .contains('No')
        .click()
        
      cy.get('.rc-slider-handle').eq(1).move({ deltaX: 270, deltaY: 0 })
      cy.get('.rc-slider-handle').eq(2).move({ deltaX: 270, deltaY: 0 })
      cy.get('.rc-slider-handle').eq(3).move({ deltaX: 270, deltaY: 0 })
      cy.get('.rc-slider-handle').eq(4).move({ deltaX: 170, deltaY: 0 })

      cy.get('[data-testid=text-input]').type('Brazil')
      cy.get('[data-testid="next-button"')  
        .click()
        .should('not.be.enabled')
      cy.get('.error-icon')
        .should('be.visible')
        .siblings().should('contain','Total must equal 100%')
      cy.get('.sc-cMljjf')
        .should('be.visible')
        .contains('There are a few errors above')

    })
 }) 
