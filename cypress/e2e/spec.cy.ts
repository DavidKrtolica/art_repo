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

  it('should visit artist hall page and verify there are 8 artists in the table', () => {
    cy.visit("http://localhost:3000/hall");
    cy.get('table tbody a').should('have.length', 8);
    cy.get('table tbody').find('a').contains("Mossholder");
  });

  it('should visit register page, register a new user and go to Curator Corner to finish registration', () => {
    cy.visit("http://localhost:3000/auth");
    cy.get('[id="email"]').type("curator@email.com");
    cy.get('[id="password"]').type("curator");
    cy.get('[id="login-btn"]').click();
    cy.get('[id="linkId0"]').click();
    cy.get('[id="edit-profile"]').click();
    //cy.get('[id="aboutyou"]').type(" I am the last exam test!");
    cy.get('[id="saveprofile"]').click();
    cy.contains('Your personal information has successfully been saved');
  });
})

export {};