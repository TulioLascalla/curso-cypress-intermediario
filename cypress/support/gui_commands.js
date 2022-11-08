Cypress.Commands.add('login', () => {
    cy.visit('users/sign_in') //já usa o baseUrl definido no cypress.json
    cy.get('[data-qa-selector="login_field"]').type(Cypress.env('user_name'))
    cy.get('[data-qa-selector="password_field"]').type(Cypress.env('user_password'))
    cy.get('[data-qa-selector="sign_in_button"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click();
    cy.contains('Sign out').click(); // contains = recebe o texto do link
})

Cypress.Commands.add('gui_createProject',  project => {
    cy.visit('projects/new');
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('#project_initialize_with_readme').check()
    // cy.get('data-disable-with="Create project"').click()
    cy.contains('Create project').click()
})
