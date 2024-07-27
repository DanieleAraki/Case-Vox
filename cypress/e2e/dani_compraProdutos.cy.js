/// <reference types="Cypress"/>


describe('Teste Vox - Realizando a compra de produtos com sucesso', () => {
    it('Compra de produtos', () => {
        // Realizando o login com sucesso:
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
        // Ordenação de produtos de menor para maior valor:
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        
        // Validação da ordenação do produtos:
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bolt T-Shirt')

        // Adicionando os produtos no carrinho:
        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()
        
        // Checagem quantidade de produtos adicionados no carrinho:
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '3')

        // Acessando o carrinho e removendo produto:
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-onesie"]').click()

        // Chekout:
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type("Teste Primeiro Nome")
        cy.get('[data-test="lastName"]').type("Teste Ultimo Nome")
        cy.get('[data-test="postalCode"]').type("54545454")
        cy.get('[data-test="continue"]').click()

        // Finalizando a compra:
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('have.text','Thank you for your order!')
        
    });
});