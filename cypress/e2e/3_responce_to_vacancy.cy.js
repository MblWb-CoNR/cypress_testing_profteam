describe('Отклик на вакансию студентом', () => {
    it('Пользователь входит и оформляет заявку', () => {

        cy.visit('https://dev.profteam.su/login'); // переход на страницу авторизации

        //авторизация
        cy.get('input[type=text]').type('malenkoes'); // логин
        cy.get('input[type=password]').type('_Conrxyisosi06'); // пароль
        cy.get('button[type=submit]').eq(2).click(); // тык на кнопку входа

        // переход на вакансии
        cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click();

        // клик на кнопку "откликнуться"
        cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green').click();

        cy.get('.card-main__button-flag').click();
    });
});