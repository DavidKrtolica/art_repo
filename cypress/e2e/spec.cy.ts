describe('First test', () => {
  //QUERY GRAPHQL DATA - not needed?
  /*beforeEach(() => {
    cy.intercept('GET', '/api/products', {
      body: products,
      statusCode: 200,
    });
    cy.visit('/products');
  });*/

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
})