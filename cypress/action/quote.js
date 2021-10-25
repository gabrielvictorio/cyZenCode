class Quote {
    elements()
{
    var  elementsList = {
        industryDataInputField: '[data-qa-hook="industry-selector"]',
        industryDataOutputField:'[data-qa-hook="industries-data"]',
        nextButton:'[data-testid="next-button"]',
        grossRevenueSlider:'.rc-slider',
        confirmationPrompcht:'.sc-kAzzGY',
        inpuptEmailField:'input[type="email"]',
        errorPopUpField:'.frame-me',
        errorsAboveTextContainer:'.sc-cMljjf',
}
return elementsList
}

visitQuotePage() {
    cy.visit('/')
}

}