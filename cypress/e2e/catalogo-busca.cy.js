/// <reference types='cypress'/>

import livro from "../fixtures/livros.json";

describe('Funcionalidade: Busca no catalogo', () => {


});

it('Deve fazer a busca do livro 1984 com sucesso', () => {
    cy.visit('http://localhost:3000/catalog.html')
    cy.get('#search-input').type('1984')
    cy.get('.card > .card-body').should('contain', 1984)


});

it('Deve fazer a busca do livro 1984 com massa de dados', () => {
    cy.visit('http://localhost:3000/catalog.html')
    cy.get('#search-input').type(livro[1].livro)
    cy.get('.card > .card-body').should('contain', livro[1].livro)
});

it('Deve fazer a busca de um livro usando Fixture', () => {
    cy.visit('http://localhost:3000/catalog.html')
    cy.fixture('livros').then((cat) => {
        cy.get('#search-input').type(cat[0].livro)
        cy.get('.card > .card-body').should('contain', cat[0].livro)
    })
});


it.only('Deve validar todos os livros da lista', () => {
    cy.visit('http://localhost:3000/catalog.html')
    cy.fixture('livros').then((cat) => {
        cat.forEach(item => {
            cy.get('#search-input').clear().type(item.livro)
            cy.get('.card > .card-body').should('contain', item.livro)
            



        });


    });



})




