describe('Google search bar', () => {

  it('Search for an item', () => {
    cy.visit('https://www.google.com/')
      .get('input[title="Search"]')
      .type('Macbook pro 2019')
      .type('{enter}')
      .title().should('equal','Macbook pro 2019 - Google Search');
  });

})