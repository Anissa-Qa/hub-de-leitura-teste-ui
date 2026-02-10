import { faker } from '@faker-js/faker';

import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cadastroPage.vistarPaginaCadastro()


    });


    it('Deve realizar o cadastro com sucesso, usando função JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Anissa Silva')
        cy.get('#email').type(email)
        cy.get('#phone').type('48988767766')
        cy.get('#password').type('Anissa1234')
        cy.get('#confirm-password').type('Anissa1234')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //resultado esperado
        cy.url().should('include', 'dashboard')
    });

    it('Deve realizar o cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.firstName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('48988767766')
        cy.get('#password').type('Anissa1234')
        cy.get('#confirm-password').type('Anissa1234')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //resultado esperado
        cy.url().should('include', 'dashboard')
    });

    it('Deve realizar cadastro com sucesso usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.preencherCadastro('Anissa Ahmed', email, '489885059877', 'Teste@123', 'Teste@123')
        cy.url().should('include', 'dashboard')

    });

    it('Deve fazer cadastro com sucesso usando page objects', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPage.preencherCadastro('Anissa', email, '48988765433', 'user123', 'user123')
        cy.url().should('include', 'dashboard')
    });

it.only('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
    cadastroPage.preencherCadastro('', 'anissa@teste.com', '48988765434', 'teste123', 'teste123')
    cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
});


});