// const faker = require('@faker-js/faker')
import { faker } from '@faker-js/faker'

describe('Create Project', () =>{
    before(() => cy.login() )

    it('successfully', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(10) //pega 10 palavras aleatorias para descrição
        }

        cy.gui_createProject(project)

        //verifica que quando se cria o projeto a URL vai se a base + nome do user + nome do projeto
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    })

})
