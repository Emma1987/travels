describe('Homepage', () => {
  it('Homepage is displayed correctly', () => {
    cy.visit('http://localhost:3000');

    cy.get('header')
      .should('be.visible');

    cy.get('main')
      .should('be.visible');

    cy.get('h1')
      .should('be.visible')
      .should('have.length', 1);
  })
})
