describe('E2E and Integration tests', () => {
  it('should visit the home page', () => {
    cy.visit("http://localhost:3000/");
  });

  it('should check for parts of home page exists', () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Artwork Gallery");
    cy.contains("Artist Hall");
    cy.contains("Authenticate");
    cy.contains("Register");
  });

  it('should visit gallery page and verify there are artworks', () => {
    cy.visit("http://localhost:3000/gallery");
    cy.get('[alt="Vitamin Chaos"]').click();
    cy.contains("Mambo Maribel");
  });

  it('should visit login page, successfully login, open navbar and successfully logout', () => {
    cy.visit("http://localhost:3000/auth");
    cy.get('[id="email"]').type('test@email.com');
    cy.get('[id="password"]').type('test123');
    cy.get('[id="login-btn"]').click();
    cy.contains('test@email.com');
    cy.contains('Log Out');
    cy.get('[data-testid="DoubleArrowIcon"]').click();
    cy.get('[id="logout-btn"]').click();
    cy.contains('You have successfully logged out.');
  });

  it('should visit gallery page, search for an artwork and go to that artwork page', () => {
    cy.visit("http://localhost:3000/gallery");
    cy.get('[id="outlined-basic"]').type('Spiked');
    cy.get('[id="search-submit-icon"]').click();
    cy.get('img').should('have.length', 1).click();
    cy.url().should('include', '/artwork/7d5a967c-7178-11ed-9747-772d46b82e60');
  });
})

export {};