describe('Подтверждение вакансии', () => {
    it('подтверждение', () => {

        cy.visit('https://dev.profteam.su/login'); // переход на страницу авторизации

        // авторизация пользователя
        cy.get('input[type=text]').type('testerStudent'); // логин
        cy.get('input[type=password]').type('Password1'); // пароль
        cy.get('button[type=submit]').eq(2).click(); // тык на кнопку входа


        cy.get(':nth-child(5) > .menu-item__item-name').click();


        cy.get('.infinite-loader > :nth-child(3) > .button').click();


        cy.get('.status-open__buttons > :nth-child(1)').click();
    });
});