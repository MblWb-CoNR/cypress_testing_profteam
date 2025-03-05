describe('Подтверждение вакансии', () => {
    it('подтверждение', () => {

        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerStudent');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(5) > .menu-item__item-name').click();
        cy.get('.infinite-loader > :nth-child(1) > .button').click();
        cy.get('.status-open__buttons > :nth-child(2)').click();
    });
});