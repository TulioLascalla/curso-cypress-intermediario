describe('Login', function () {
    it('successfully', () => {
        cy.login()
        cy.get('.qa-user-avatar').should('exist')
    })
});
