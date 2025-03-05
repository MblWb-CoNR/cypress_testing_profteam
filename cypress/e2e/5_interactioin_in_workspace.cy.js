describe('Общение с студентом и подтверждение вакансии', () => {
    it('Общение и подтверждение', () => {

        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerStudent');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(5) > .menu-item__item-name').click();
        cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected').click();
        cy.get('.form-select__items > :nth-child(2)').click();

        cy.get('.infinite-loader > :nth-child(1) > .button').click();

        cy.get('.form-area').type('Добрый день, просим предоставить ваше портфолио');
        cy.get('.comment-textarea__buttons > :nth-child(2)').click();

    });
});